import React from 'react'
import Content from './Timeline'
import './index.scss'

const TimelineDashboard = () => (
  <div className="timeline-content">
    <h2>Timeline</h2>
    <div className="timeline-content__dashboard">
      <Content />
    </div>
  </div>
)

export default TimelineDashboard
