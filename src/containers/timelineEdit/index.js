import { connect } from 'react-redux'
import { updateTimelineItem } from '../../modules/timeline'
import TimelineForm from '../../components/TimelineForm'

const mapStateToProps = state => ({
  groups: state.timeline.groups,
  hours: state.timeline.hours,
  minutes: state.timeline.minutes,
  edit: state.timeline.edit,
  formData: state.timeline.formData,
  submitButtonText: 'Edit'
})

const mapDispatchToProps = {
  submit: updateTimelineItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineForm)
