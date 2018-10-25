import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import api from '../../modules/api'

class App extends React.Component {
  componentDidMount() {
    api.initializeApp()

    api.auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in and currentUser will no longer return null.
        console.log(user)
      } else {
        // No user is signed in.
        console.log('go on', api.auth.currentUser)
      }
    })
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <div>
            {this.props.routes.map((route, i) =>
              route.routes.map((childRoute, j) => (
                <route.layout key={childRoute.path} {...childRoute} />
              ))
            )}
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
