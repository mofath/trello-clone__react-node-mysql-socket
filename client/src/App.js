import React, { useEffect, useContext, useCallback } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { LandingScreen, DashboardScreen } from './screens';
import { useActions } from './hooks/useAction';
import { SocketContext } from "./socket";

const App = () => {
  const { initSocket } = useContext(SocketContext);
  const { authenticate } = useActions();

  // Update access token
  // Check current user auth 
  // on refresh and app update
  const checkAuth = useCallback(() => {
    authenticate();
  }, [authenticate]);

  useEffect(() => checkAuth, [checkAuth]);

  // establish socket connection on app load
  useEffect(() => initSocket(), [initSocket]);

  return (
    <BrowserRouter >
      <Switch>
        <Route path="/home" exact component={DashboardScreen} />
        <Route path="/" exact component={LandingScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
