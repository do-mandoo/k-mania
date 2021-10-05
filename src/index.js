import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createLogger } from 'redux-logger';
// import createSagaMiddleware from '@redux-saga/core';
// import { applyMiddleware, createStore } from 'redux';
// import rootReducer, { rootSaga } from './modules';
// import { composeWithDevTools } from 'redux-devtools-extension';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
