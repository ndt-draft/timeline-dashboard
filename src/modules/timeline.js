import moment from 'moment'
import { push } from 'connected-react-router'
import api from './api'
import utils from './utils'

// Constants
export const UPDATE_TIMELINE_DATA = 'timeline/UPDATE_TIMELINE_DATA'

// Actions
export const updateTimelineData = payload => ({
  type: UPDATE_TIMELINE_DATA,
  payload
})

// Thunks
export const fetchTimelineItems = () => {
  return (dispatch, getState) => {
    let uid = utils.getUid()

    api.database
      .ref(`/items/${uid}`)
      .once('value')
      .then(function(snapshot) {
        let items = snapshot.val() || []
        let newItems = Object.keys(items).map(id => {
          let values = items[id]
          return {
            id,
            ...values,
            start_time: moment(new Date(values.start_time * 1000)),
            end_time: moment(new Date(values.end_time * 1000)),
            color: '#31302b',
            bgColor: '#cdf292',
            selectedBgColor: '#eaeaea'
          }
        })
        dispatch(
          updateTimelineData({
            items: newItems
          })
        )
      })
  }
}

export const createTimelineItem = values => {
  return (dispatch, getState) => {
    let state = getState()
    let items = state.timeline.items

    let uid = api.auth.currentUser.uid
    values.id = uid

    let newItem = makeTimelineItem(values)

    // firebase
    var newItemKey = api.database
      .ref()
      .child('items')
      .push().key

    api.database.ref(`/items/${uid}/${newItemKey}`).set({
      title: newItem.title,
      group: newItem.group,
      start_time: newItem.start_time.unix(),
      end_time: newItem.end_time.unix()
    })
    // end firebase

    items = [...items, newItem]

    dispatch(
      updateTimelineData({
        items
      })
    )

    dispatch(push('/timeline'))
  }
}

export const createGroup = values => {
  return (dispatch, getState) => {
    let state = getState()
    let groups = state.timeline.groups

    groups = [
      ...groups,
      {
        ...values,
        id: groups.length + 1
      }
    ]

    dispatch(
      updateTimelineData({
        groups
      })
    )
  }
}

export const populateForEdit = values => {
  return (dispatch, getState) => {
    dispatch(
      updateTimelineData({
        formData: {
          ...values,
          // @see https://momentjs.com/docs/#/displaying/format/
          start_date: values.start_time.format('YYYY-MM-DD'),
          start_hour: values.start_time.format('H'),
          start_minute: values.start_time.format('m'),
          end_date: values.end_time.format('YYYY-MM-DD'),
          end_hour: values.end_time.format('H'),
          end_minute: values.end_time.format('m')
        },
        edit: true
      })
    )

    dispatch(push(`/timeline/items/${values.id}/edit`))
  }
}

export const updateTimelineItem = values => {
  return (dispatch, getState) => {
    let state = getState()
    let items = [...state.timeline.items]

    let updateIndex = items.findIndex(item => item.id === values.id)
    let updateItem = makeTimelineItem(values)
    items[updateIndex] = updateItem

    let uid = api.auth.currentUser.uid

    // firebase
    api.database.ref(`/items/${uid}/${updateItem.id}`).set({
      title: updateItem.title,
      group: updateItem.group,
      start_time: updateItem.start_time.unix(),
      end_time: updateItem.end_time.unix()
    })
    // end

    dispatch(
      updateTimelineData({
        items
      })
    )

    dispatch(push('/timeline'))
  }
}

// Utilities
const makeTimelineItem = values => {
  let startTime = `${values.start_date} ${values.start_hour}:${
    values.start_minute
  }:00`
  let endTime = `${values.end_date} ${values.end_hour}:${values.end_minute}:00`

  return {
    ...values,
    start_time: moment(new Date(startTime)),
    end_time: moment(new Date(endTime)),
    color: '#31302b',
    bgColor: '#cdf292',
    selectedBgColor: '#eaeaea'
  }
}

// Action handlers
const ACTION_HANDLERS = {
  [UPDATE_TIMELINE_DATA]: (state, action) => {
    return {
      ...state,
      ...action.payload
    }
  }
}

// Reducer
export const initialState = {
  items: [],
  groups: [{ id: 1, title: 'Timeline' }],
  // https://stackoverflow.com/a/29559488/2833319
  hours: Array.from(new Array(24), (x, i) => i),
  minutes: Array.from(new Array(60), (x, i) => i),
  formData: {
    title: '',
    group: '1',
    start_date: '',
    start_hour: 0,
    start_minute: 0,
    end_date: '',
    end_hour: 0,
    end_minute: 0
  },
  edit: false
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
