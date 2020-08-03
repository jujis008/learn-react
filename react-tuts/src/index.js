import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = new App({desc: '类组件是继承自React.Component'}).render();

ReactDOM.render(
  // <React.StrictMode>
  //   <App title="React 16.14"/>
  // </React.StrictMode>,
  // <App desc='类组件是继承自React.Component'/>,
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
