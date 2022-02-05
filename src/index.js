import React from 'react';
// import { createContext, useRef, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useFetch } from './useFetch';
// import { useInput } from './useInput';
// import App from './App';

function App({ login }) {
  const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`);
  if (loading) return <h1>loading...</h1>;
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  return (
    <div>
      <img src={data.avatar_url} alt={data.login} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App login="danish-faisal" />
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

// Refactoring useState to useReducer
/*
function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
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

// Working with Dependency Array and Fetching data with useEffect
/*
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
*/

// Handling complex state with useReducer
/*
function App() {
  const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0);

  return <h1 onClick={() => setNumber(1)}>{number}</h1>;
}
*/

// Dispatching actions with useReducer
/*
const initialState = {
  message: 'hi'
}

function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! I JUST SAID ${state.message}`
      }
    case "whisper":
      return {
        message: `excuse me, I just said ${state.message}`
      }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state", state);
  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper" })}>Whisper</button>
    </>
  );
}
*/

// Managing form inputs with useRef
/*
function App() {
  const sound = useRef();
  const color = useRef();

  function submit(e) {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`);
    sound.current.value = '';
    colorVal.current.value = '';
  }

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Sound..." ref={sound} />
      <input type="color" ref={color} />
      <button>Add</button>
    </form>
  );

}
*/

// Creating controlled components with useState
/*
function App() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  function submit(e) {
    e.preventDefault();
    alert(`${sound} sounds like ${color}`);
    setSound("");
    setColor("#000000");
  }

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Sound..." value={sound} onChange={(e) => setSound(e.target.value)} />
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <button>Add</button>
    </form>
  );

}
*/

// Reusing form logic with custom Hooks
/*
function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  function submit(e) {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();
  }

  return (
    <form onSubmit={submit}>
      <input type="text" {...titleProps} placeholder="Sound..." />
      <input type="color" {...colorProps} />
      <button>Add</button>
    </form>
  );
}
*/

// Placing data in Context & Creating a custom Hook with context
/*
const TreesContext = createContext();

export const useTrees = () => useContext(TreesContext);

const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Oak" },
  { id: "3", type: "Family" },
  { id: "4", type: "Component" }
];

ReactDOM.render(
  <React.StrictMode>
    <TreesContext.Provider value={{ trees }}>
      <App />
    </TreesContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
*/