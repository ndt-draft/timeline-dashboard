import React from 'react'
import { connect } from 'react-redux'
import { createTimelineItem, initialState } from '../../modules/timeline'
import TimelineForm from '../../components/TimelineForm'
import styles from './index.module.scss'

const TimelineCreate = props => (
  <div className={styles.timelineCreate}>
    <TimelineForm {...props} />
  </div>
)

const mapStateToProps = state => ({
  groups: state.timeline.groups,
  hours: state.timeline.hours,
  minutes: state.timeline.minutes,
  formData: initialState.formData,
  submitButtonText: 'Create'
})

const mapDispatchToProps = {
  submit: createTimelineItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineCreate)
