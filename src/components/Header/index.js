import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import utils from '../../modules/utils'

const Header = () => (
  <header className={styles.header}>
    {utils.getUid() ? (
      <React.Fragment>
        <Link to="/">Timeline</Link>
        <Link to="/timeline/items/create">Create Item</Link>
        <Link to="/signout">Sign out</Link>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Link to="/signup">Sign up</Link>
        <Link to="/signin">Sign in</Link>
      </React.Fragment>
    )}
  </header>
)

export default Header
