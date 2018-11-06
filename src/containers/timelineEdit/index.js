import React from 'react'
import { connect } from 'react-redux'
import { updateTimelineItem, removeTimelineItem } from '../../modules/timeline'
import TimelineForm from '../../components/TimelineForm'
import styles from './index.module.scss'

const TimelineEdit = props => (
  <div className={styles.timelineEdit}>
    <TimelineForm {...props} />
  </div>
)

const mapStateToProps = state => ({
  groups: state.timeline.groups,
  hours: state.timeline.hours,
  minutes: state.timeline.minutes,
  edit: state.timeline.edit,
  formData: state.timeline.formData,
  submitButtonText: 'Save',
  canRemove: true
})

const mapDispatchToProps = {
  submit: updateTimelineItem,
  remove: removeTimelineItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineEdit)
