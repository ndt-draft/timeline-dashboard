import moment from 'moment'
import { push } from 'connected-react-router'

// Constants
export const UPDATE_TIMELINE_DATA = 'counter/UPDATE_TIMELINE_DATA'

// Actions
export const updateTimelineData = payload => ({
  type: UPDATE_TIMELINE_DATA,
  payload
})

// Thunks
export const createTimelineItem = values => {
  return (dispatch, getState) => {
    let state = getState()
    let items = state.timeline.items
    let startTime = `${values.start_date} ${values.start_hour}:${
      values.start_minute
    }:00`
    let endTime = `${values.end_date} ${values.end_hour}:${
      values.end_minute
    }:00`

    items = [
      ...items,
      {
        ...values,
        id: Math.random(),
        start_time: moment(new Date(startTime)),
        end_time: moment(new Date(endTime)),
        color: '#31302b',
        bgColor: '#cdf292',
        selectedBgColor: '#eaeaea'
      }
    ]

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
    let items = state.timeline.items

    items = items.filter(item => item.id !== values.id)

    dispatch(
      updateTimelineData({
        items
      })
    )

    dispatch(createTimelineItem(values))
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
const initialState = {
  items: [
    {
      id: 1,
      group: 1,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'day'),
      color: '#31302b',
      bgColor: '#bdeeff',
      selectedBgColor: '#eaeaea'
    },
    {
      id: 2,
      group: 1,
      title: 'item 2',
      start_time: moment().add(-1, 'day'),
      end_time: moment().add(12, 'hour'),
      color: '#31302b',
      bgColor: '#bdeeff',
      selectedBgColor: '#eaeaea'
    },
    {
      id: 3,
      group: 1,
      title: 'item 3',
      start_time: moment().add(12, 'hour'),
      end_time: moment().add(3, 'day'),
      color: '#31302b',
      bgColor: '#cdf292',
      selectedBgColor: '#eaeaea'
    }
  ],
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
