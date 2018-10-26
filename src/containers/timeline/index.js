import React from 'react'
import { connect } from 'react-redux'
import Content from './Timeline'
import { fetchTimelineItems } from '../../modules/timeline'
import './index.scss'

class TimelineDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.contentRef = React.createRef()
  }

  componentDidMount() {
    this.props.fetchTimelineItems()
  }

  requestFullscreen = () => {
    let fullscreenDiv = this.contentRef.current
    let fullscreenFunc = fullscreenDiv.requestFullscreen

    if (!fullscreenFunc) {
      ;[
        'mozRequestFullScreen',
        'msRequestFullscreen',
        'webkitRequestFullScreen'
      ].forEach(function(req) {
        fullscreenFunc = fullscreenFunc || fullscreenDiv[req]
      })
    }

    fullscreenFunc.call(fullscreenDiv)
  }

  render() {
    return (
      <div className="timeline-content" ref={this.contentRef}>
        <h2>Timeline</h2>
        <Content />
        <div className="timeline-footer">
          <button className="btn btn-primary" onClick={this.requestFullscreen}>
            Fullscreen
          </button>
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
