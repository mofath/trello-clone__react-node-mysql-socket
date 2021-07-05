import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import { SocketContextProvider } from "./context";
import { store } from "./state";


import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <SocketContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SocketContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

