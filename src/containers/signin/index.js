import { connect } from 'react-redux'
import { signin } from '../../modules/auth'
import AuthForm from '../../components/AuthForm'

const mapStateToProps = state => ({
  error: state.auth.error,
  submitButtonText: 'Sign in'
})

const mapDispatchToProps = {
  submit: signin
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm)
