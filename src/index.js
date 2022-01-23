import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(setData)
  }, []);

  return (
    <div className="App">
      <ul>
        {
          data.map((user, idx) => (
            <li key={user.id}>{user.login}</li>
          ))
        }
      </ul>
      <button onClick={() => setData([])}>Clear</button>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Array and Object destructuring
/*
const [, , third] = ["Alex", "Ali", "Anna"];

console.log(third);

<App name="Danish" />

function App({ name }) {
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
    </div>
  );
}
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

// Introducing useEffect & Working with the dependency array
/*
function App() {
  const [name, setName] = useState("Jan");
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    console.log(`Celebrate ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? "admin" : "not admin"}`)
  }, [admin]);

  return (
    <div className="App">
      <section>
        <p>Congratulations {name}!</p>
        <button onClick={() => setName("Will")}>Change Winner</button>
        <p>{admin ? "Logged In" : "Not Logged In"}</p>
        <button onClick={() => setAdmin(true)}>Log In</button>
      </section>
    </div>
  );
}
*/