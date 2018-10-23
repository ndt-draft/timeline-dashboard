import React from 'react'
import Content from './Timeline'
import Form from './TimelineForm'
import EditForm from './TimelineEditForm'
import './index.scss'

const TimelineDashboard = () => (
  <div>
    <div className="row">
      <div className="timeline-forms col-md-3">
        <h2>Items</h2>
        <Form />
        <hr />
        <EditForm />
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
