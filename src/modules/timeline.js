import moment from 'moment'

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

    console.log(startTime, endTime, new Date(startTime), new Date(endTime))

    items = [
      ...items,
      {
        ...values,
        id: items.length + 1,
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

export const populateForEdit = items => {
  return (dispatch, getState) => {
    dispatch(
      updateTimelineData({
        edit: false
      })
    )

    setTimeout(
      () =>
        dispatch(
          updateTimelineData({
            formData: {
              ...items,
              // @see https://momentjs.com/docs/#/displaying/format/
              start_date: items.start_time.format('YYYY-MM-DD'),
              start_hour: items.start_time.format('H'),
              start_minute: items.start_time.format('m'),
              end_date: items.end_time.format('YYYY-MM-DD'),
              end_hour: items.end_time.format('H'),
              end_minute: items.end_time.format('m')
            },
            edit: true
          })
        ),
      0
    )
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
