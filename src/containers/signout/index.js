import React from 'react'
import api from '../../modules/api'

class Signout extends React.Component {
  componentDidMount() {
    api.auth.signOut()
  }

  render() {
    return <div />
  }
}

export default Signout
