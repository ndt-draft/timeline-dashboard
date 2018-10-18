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

    items = [
      ...items,
      {
        ...values,
        id: items.length + 1,
        start_time: moment(new Date(values.start_time)),
        end_time: moment(new Date(values.end_time)),
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
      group: 2,
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
  groups: [{ id: 1, title: 'Project 1' }, { id: 2, title: 'Human 2' }]
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
