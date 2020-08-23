import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => {
  return (
    <Route 
      {...rest}
      render={ (props) => 
        (!isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)
      }
    />
  )
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}
