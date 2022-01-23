import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [name, setName] = useState("Jan");

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  });

  return (
    <div className="App">
      <section>
        <p>Congratulations {name}!</p>
        <button onClick={() => setName("Will")}>Change Winner</button>
      </section>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App name="Danish" />
  </React.StrictMode>,
  document.getElementById('root')
);

// Array and Object destructuring
/*
const [, , third] = ["Alex", "Ali", "Anna"];

console.log(third);
*/

// Incorporating the useState hook
/*
function App() {
  const [status, setStatus] = useState("Not Delivered");

  return (
    <div className="App">
      <h1>The package is: {status}.</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </div>
  );
}
*/

// Building a checkbox with useState
/*
function App() {
  const [status, setStatus] = useState("Not Delivered");
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <h1>The package is: {status}.</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
      <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)} />
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  );
}
*/

// Working with component trees & Sending interactions up component trees
/*
import { FaStar } from 'react-icons/fa';

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return (
    <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
  );
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {
        createArray(totalStars).map((n, i) => (
          <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
        ))
      }
      <p>{selectedStars} of {totalStars}</p>
    </>
  );
}

function App() {

  return (
    <div className="App">
      <StarRating totalStars={5} />
    </div>
  );
}

*/