import logo from './logo.svg';
import './App.css';

// Array & Object destructuring
function App({ name }) {
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
    </div>
  );
}

export default App;
