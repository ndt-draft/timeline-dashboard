import React from 'react'
import { connect } from 'react-redux'
import Timeline, { TodayMarker } from 'react-calendar-timeline'
import moment from 'moment'
import './Timeline.scss'

const TimelineContent = props => {
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
    <Timeline
      sidebarWidth={0}
      groups={props.groups}
      items={props.items}
      stackItems={true}
      defaultTimeStart={moment(firstDay)}
      defaultTimeEnd={moment(lastDay)}
      canMove={true}
      lineHeight={50}
      itemRenderer={itemRenderer}>
      <TodayMarker interval={2000} />
    </Timeline>
  )
}

const mapStateToProps = state => ({
  items: state.timeline.items,
  groups: state.timeline.groups
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineContent)
