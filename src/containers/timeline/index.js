import React from 'react'
import Timeline, { TodayMarker } from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import './Timeline.scss'
import moment from 'moment'

const groups = [{ id: 1, title: 'Project 1' }, { id: 2, title: 'Human 2' }]

const items = [
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
    id: 4,
    group: 2,
    title: 'item 1.1',
    start_time: moment().add(3, 'day'),
    end_time: moment().add(5, 'day'),
    color: '#31302b',
    bgColor: '#cdf292',
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
]

const TimelineDashboard = () => {
  const itemRenderer = ({
    item,
    timelineContext,
    itemContext,
    getItemProps,
    getResizeProps
  }) => {
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps()
    const backgroundColor = itemContext.selected
      ? itemContext.dragging
        ? 'red'
        : item.selectedBgColor
      : item.bgColor
    const borderColor = itemContext.resizing ? 'red' : item.color
    return (
      <div
        {...getItemProps({
          style: {
            backgroundColor,
            color: item.color,
            borderColor,
            borderStyle: 'solid',
            borderWidth: 1,
            borderLeftWidth: itemContext.selected ? 3 : 1,
            borderRightWidth: itemContext.selected ? 3 : 1,
            textAlign: 'center',
            fontSize: 14
          },
          onMouseDown: () => {
            console.log('on item click', item)
          }
        })}>
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

        <div
          style={{
            height: itemContext.dimensions.height,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
          {itemContext.title}
        </div>

        {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
      </div>
    )
  }

  // @see https://stackoverflow.com/a/39267750/2833319
  var date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth()
  var firstDay = new Date(y, m, 1)
  var lastDay = new Date(y, m + 1, 1)

  return (
    <div>
      <Timeline
        groups={groups}
        items={items}
        stackItems={true}
        sidebarContent={<div>Groups</div>}
        defaultTimeStart={moment(firstDay)}
        defaultTimeEnd={moment(lastDay)}
        canMove={true}
        lineHeight={50}
        itemRenderer={itemRenderer}>
        <TodayMarker interval={2000} />
      </Timeline>
    </div>
  )
}

export default TimelineDashboard
