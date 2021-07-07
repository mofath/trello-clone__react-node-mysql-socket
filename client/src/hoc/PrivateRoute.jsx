import React, { useEffect, useCallback, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { useActions } from '../hooks/useAction';
import { SocketContext } from '../socket';

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const { initSocket } = useContext(SocketContext);
  const { authenticate } = useActions();

  // Update access token
  // Check current user auth
  // on refresh and app update
  const checkAuth = useCallback(() => {
    authenticate();
  }, [authenticate]);

  useEffect(() => checkAuth, []);

  // establish socket connection on app load
  useEffect(() => initSocket(), [initSocket]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <React.Fragment>{children}</React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
