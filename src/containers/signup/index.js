import React from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'
import { signup } from '../../modules/auth'

const Signup = props => {
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
        props.signup(values)
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary">
            Signup
          </button>
        </Form>
      )}
    </Formik>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  signup
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
