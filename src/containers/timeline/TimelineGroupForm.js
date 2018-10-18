import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { createGroup } from '../../modules/timeline'

const TimelineGroupForm = props => {
  return (
    <Formik
      initialValues={{ title: '' }}
      validate={values => {
        let errors = {}
        return errors
      }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        props.createGroup(values)
        setSubmitting(false)
      }}>
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label>Title</label>
            <Field type="text" name="title" required className="form-control" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary">
            Create group
          </button>
        </Form>
      )}
    </Formik>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  createGroup
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineGroupForm)
