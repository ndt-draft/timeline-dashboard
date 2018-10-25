import React from 'react'
import { Redirect } from 'react-router-dom'
import PageLayout from './PageLayout'
import Header from '../components/Header'
import utils from '../modules/utils'

/**
 * @extends PageLayout
 * @see https://simonsmith.io/reusing-layouts-in-react-router-4/
 */
const DefaultLayout = ({ component: Component, ...rest }) => (
  <PageLayout
    {...rest}
    component={matchProps => (
      <div>
        {utils.getUid() ? (
          <React.Fragment>
            <Header />
            <Component {...matchProps} />
          </React.Fragment>
        ) : (
          <Redirect to="/signin" />
        )}
      </div>
    )}
  />
)

export default DefaultLayout
