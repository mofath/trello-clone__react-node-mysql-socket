import React, { useEffect, useContext } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { LandingScreen, DashboardScreen } from './screens';
import { SocketContext } from "./context";

const App = () => {
  const { initSocket } = useContext(SocketContext);

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
