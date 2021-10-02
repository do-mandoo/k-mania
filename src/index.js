import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

// 로그인 상태 유지:리액트 앱이 브라우저에서 맨 처음 렌더링 될 때,
// localStorage에서 값을 불러와 리덕스 스토어 안에 넣도록 구현.
// function loadUser() {
//   try {
//     const user = localStorage.getItem('user');
//     // if (!user) return; // 로그인 상태가 아니라면 아무것도 안 함

//     // store.dispatch(tempSetUser(user));
//     // store.dispatch(check());
//   } catch (e) {
//     console.log('localStorage is not working');
//   }
// }

sagaMiddleware.run(rootSaga);
// loadUser();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
