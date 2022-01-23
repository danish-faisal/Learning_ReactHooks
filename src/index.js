import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

function App() {
  const [status, setStatus] = useState("Not Delivered");

  return (
    <div className="App">
      <h1>The package is: {status}.</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App name="Danish" />
  </React.StrictMode>,
  document.getElementById('root')
);
