import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <Link to="/">Timeline</Link>
    <Link to="/timeline/items">Items</Link>
  </header>
)

export default Header
