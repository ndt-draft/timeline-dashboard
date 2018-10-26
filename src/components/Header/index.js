import React from 'react'
import Link from '../Link'
import utils from '../../modules/utils'
import styles from './Header.module.scss'

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
        <Link to="/signin">Sign in</Link>
        <Link to="/signup">Sign up</Link>
      </React.Fragment>
    )}
  </header>
)

export default Header
