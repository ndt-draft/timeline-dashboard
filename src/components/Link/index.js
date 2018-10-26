import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Link.module.scss'

const Link = props => (
  <NavLink activeClassName={styles.active} exact {...props} />
)

export default Link
