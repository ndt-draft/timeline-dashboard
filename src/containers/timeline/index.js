import React from 'react'
import { connect } from 'react-redux'
import Content from './Timeline'
import { fetchTimelineItems } from '../../modules/timeline'
import './index.scss'

class TimelineDashboard extends React.Component {
  componentDidMount() {
    this.props.fetchTimelineItems()
  }

  render() {
    return (
      <div className="timeline-content">
        <h2>Timeline</h2>
        <div className="timeline-content__dashboard">
          <Content />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  fetchTimelineItems
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineDashboard)
