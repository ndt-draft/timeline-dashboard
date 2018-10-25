import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <Link to="/">Timeline</Link>
    <Link to="/timeline/items/create">Create Item</Link>
    <Link to="/signup">Sign up</Link>
    <Link to="/signin">Sign in</Link>
    <Link to="/signout">Sign out</Link>
  </header>
)

export default Header
