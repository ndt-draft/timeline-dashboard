import React from 'react'
import Content from './Timeline'
import Form from './TimelineForm'
import GroupForm from './TimelineGroupForm'
import './index.scss'

const TimelineDashboard = () => (
  <div>
    <div className="row">
      <div className="timeline-forms col-md-3">
        <h2>Group</h2>
        <GroupForm />
        <hr />
        <h2>Items</h2>
        <Form />
      </div>
      <div className="timeline-content col-md-9">
        <h2>Timeline</h2>
        <div className="timeline-content__dashboard">
          <Content />
        </div>
      </div>
    </div>
  </div>
)

export default TimelineDashboard
