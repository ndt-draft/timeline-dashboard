import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { createTimelineItem } from '../../modules/timeline'

const TimelineForm = props => {
  return (
    <Formik
      initialValues={{ title: '', group: '1', start_time: '', end_time: '' }}
      validate={values => {
        let errors = {}
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        props.createTimelineItem(values)
        setSubmitting(false)
      }}>
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label>Title</label>
            <Field type="text" name="title" required className="form-control" />
          </div>

          <div className="form-group">
            <label>Group</label>
            <Field
              component="select"
              name="group"
              required
              className="form-control">
              {props.groups.map(group => (
                <option key={group.id} value={group.id}>
                  {group.title}
                </option>
              ))}
            </Field>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col">
                <label>Start time</label>
                <Field
                  type="date"
                  name="start_time"
                  required
                  className="form-control"
                />
              </div>
              <div className="col">
                <label>Hour</label>
                <Field
                  component="select"
                  name="start_hour"
                  required
                  className="form-control">
                  <option>0</option>
                  <option>...</option>
                  <option>23</option>
                </Field>
              </div>
              <div className="col">
                <label>Minute</label>
                <Field
                  component="select"
                  name="start_minute"
                  required
                  className="form-control">
                  <option>0</option>
                  <option>...</option>
                  <option>59</option>
                </Field>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col">
                <label>End time</label>
                <Field
                  type="date"
                  name="end_time"
                  required
                  className="form-control"
                />
              </div>
              <div className="col">
                <label>Hour</label>
                <Field
                  component="select"
                  name="end_hour"
                  required
                  className="form-control">
                  <option>0</option>
                  <option>...</option>
                  <option>23</option>
                </Field>
              </div>
              <div className="col">
                <label>Minute</label>
                <Field
                  component="select"
                  name="end_minute"
                  required
                  className="form-control">
                  <option>0</option>
                  <option>...</option>
                  <option>59</option>
                </Field>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary">
            Create item
          </button>
        </Form>
      )}
    </Formik>
  )
}

const mapStateToProps = state => ({
  groups: state.timeline.groups
})

const mapDispatchToProps = {
  createTimelineItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineForm)
