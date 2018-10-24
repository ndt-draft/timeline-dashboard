import { connect } from 'react-redux'
import { createTimelineItem } from '../../modules/timeline'
import TimelineForm from '../../components/TimelineForm'

const mapStateToProps = state => ({
  groups: state.timeline.groups,
  hours: state.timeline.hours,
  minutes: state.timeline.minutes,
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
  submitButtonText: 'Create'
})

const mapDispatchToProps = {
  submit: createTimelineItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineForm)
