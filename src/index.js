import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaStar } from 'react-icons/fa';

const createArray = (length) => [...Array(length)];

function Star({ selected = false }) {
  return (
    <FaStar color={selected ? "red" : "grey"} />
  );
}

function StarRating({ totalStars = 5 }) {
  return createArray(totalStars).map((n, i) => (
    <Star key={i} />
  ));
}

function App() {

  return (
    <div className="App">
      <StarRating totalStars={10} />
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App name="Danish" />
  </React.StrictMode>,
  document.getElementById('root')
);
