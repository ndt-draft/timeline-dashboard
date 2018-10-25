import React from 'react'
import { connect } from 'react-redux'
import { signout } from '../../modules/auth'

class Signout extends React.Component {
  componentDidMount() {
    this.props.signout()
  }

  render() {
    return <div />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  signout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signout)
