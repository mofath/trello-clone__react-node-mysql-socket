import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { LandingScreen } from './screens';

const App = () => {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" exact component={LandingScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
