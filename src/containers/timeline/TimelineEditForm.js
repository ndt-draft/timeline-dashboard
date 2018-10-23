import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'

const TimelineEditForm = props => {
  return (
    <div>
      {props.edit && (
        <React.Fragment>
          <h2>Edit {`${props.formData.title}`}</h2>
          <Formik
            initialValues={props.formData}
            validate={values => {
              let errors = {}
              return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false)
            }}>
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label>Title</label>
                  <Field
                    type="text"
                    name="title"
                    required
                    className="form-control"
                  />
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
                        name="start_date"
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
                        {props.hours.map(hour => (
                          <option key={`start-hour-${hour}`} option={hour}>
                            {hour}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <div className="col">
                      <label>Minute</label>
                      <Field
                        component="select"
                        name="start_minute"
                        required
                        className="form-control">
                        {props.minutes.map(minute => (
                          <option
                            key={`start-minute-${minute}`}
                            option={minute}>
                            {minute}
                          </option>
                        ))}
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
                        name="end_date"
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
                        {props.hours.map(hour => (
                          <option key={`end-hour-${hour}`} option={hour}>
                            {hour}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <div className="col">
                      <label>Minute</label>
                      <Field
                        component="select"
                        name="end_minute"
                        required
                        className="form-control">
                        {props.minutes.map(minute => (
                          <option key={`end-minute-${minute}`} option={minute}>
                            {minute}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary">
                  Edit
                </button>
              </Form>
            )}
          </Formik>
        </React.Fragment>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  groups: state.timeline.groups,
  hours: state.timeline.hours,
  minutes: state.timeline.minutes,
  edit: state.timeline.edit,
  formData: state.timeline.formData
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineEditForm)