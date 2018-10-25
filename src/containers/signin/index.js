import React from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'
import { signin } from '../../modules/auth'

const Signin = props => {
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
        props.signin(values)
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
            Signin
          </button>
        </Form>
      )}
    </Formik>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  signin
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin)
