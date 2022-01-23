import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [, , third] = ["Alex", "Ali", "Anna"];

console.log(third);

ReactDOM.render(
  <React.StrictMode>
    <App name="Danish" />
  </React.StrictMode>,
  document.getElementById('root')
);
