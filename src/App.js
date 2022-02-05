import './App.css';
// import { useContext } from 'react';
// import {  TreesContext } from '.';
import { useTrees } from '.';

function App() {
  const { trees } = useTrees();

  return (
    <div>
      <h1>Trees I've Heard of</h1>
      <ul>
        {trees.map((tree) => <li key={tree.id}>{tree.type}</li>)}
      </ul>
    </div>
  );
}


// Array & Object destructuring
// function App({ name }) {
//   return (
//     <div className="App">
//       <h1>Hello {name}!</h1>
//     </div>
//   );
// }

export default App;
