import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { LandingScreen, DashboardScreen } from './screens';
import { PrivateRoute } from "./hoc";


const App = () => {
  return (
    <BrowserRouter >
      <Switch>
        <PrivateRoute exact path="/home">
          <DashboardScreen />
        </PrivateRoute>
        <Route path="/" exact component={LandingScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
