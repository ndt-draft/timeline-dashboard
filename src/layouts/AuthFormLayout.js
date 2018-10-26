import React from 'react'
import PageLayout from './PageLayout'
import Header from '../components/Header'
import styles from './AuthFormLayout.module.scss'

/**
 * @extends PageLayout
 * @see https://simonsmith.io/reusing-layouts-in-react-router-4/
 */
const AuthFormLayout = ({ component: Component, ...rest }) => (
  <PageLayout
    {...rest}
    component={matchProps => (
      <div className={styles.authFormLayout}>
        <h1 className="text-center">Timeline Dashboard</h1>
        <Header />
        <Component {...matchProps} />
      </div>
    )}
  />
)

export default AuthFormLayout
