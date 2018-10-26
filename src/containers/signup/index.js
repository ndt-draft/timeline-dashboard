import { connect } from 'react-redux'
import { signup } from '../../modules/auth'
import AuthForm from '../../components/AuthForm'

const mapStateToProps = state => ({
  submitButtonText: 'Sign up'
})

const mapDispatchToProps = {
  submit: signup
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm)
