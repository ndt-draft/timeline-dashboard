import React from 'react'
import { Formik, Form, Field } from 'formik'

const AuthForm = props => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validate={values => {
        let errors = {}
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        props.submit(values)
        setSubmitting(false)
      }}>
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label>Email</label>
            <Field
              type="email"
              name="email"
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <Field
              type="password"
              name="password"
              required
              className="form-control"
            />
          </div>

          {props.error.message && (
            <div className="alert alert-danger">{props.error.message}</div>
          )}

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary">
              {props.submitButtonText}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default AuthForm
