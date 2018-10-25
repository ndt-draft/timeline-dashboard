import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

export default {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  initialized: false,
  database: null,
  auth: null,
  initializeApp() {
    if (this.initialized) {
      return
    }

    let config = {
      apiKey: this.apiKey,
      authDomain: this.authDomain,
      databaseURL: this.databaseURL,
      projectId: this.projectId,
      storageBucket: this.storageBucket,
      messagingSenderId: this.messagingSenderId
    }
    firebase.initializeApp(config)

    this.initialized = true
    this.database = firebase.database()
    this.auth = firebase.auth()
  }
}
