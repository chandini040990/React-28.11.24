import {useState} from 'react';
import './App.css';

// function App() {
//   const users = [
//     {id:1, name : "chand"},
//     {id:2, name : "venkat"},
//     {id:3, name : "ram"},
//     {id:4, name : "jack"}
//   ]

//   return (
//     <>
//     <ul>
//       {users.map((user) => (
//         <li key = {user.id}>{user.name}</li>
//      ) )}
//     </ul>
//     </>
//   );
// }

// export default App;

// function App() {
//   const users = ["chand", "harry", "ram", "jack"];

//   return (
//     <>
//     <ul>
//       {users.map((user,index) => (
//         <li key = {index}>{user}</li>
//      ) )}
//     </ul>
//     </>
//   );
// }

// export default App;


// function App() {
//   const[count,setCount] = useState(0);

//   // const increment =() =>{
//   //   setCount(count+1)
//   // }

//   // const decrement =() =>{
//   //   setCount(count-1)
//   // }
//   // const reset =() =>{
//   //   setCount(0)
//   // }
  

//   return (
//     <>
//     <h1>Count value is :{count}</h1>
//      <button onClick={() => setCount(count+1)}>Increment(+)</button>
//      <button onClick={() => setCount(count-1)}>Decrement(-)</button>
//      <button onClick={() => setCount(0)}>Reset(0)</button>
//     </>
//   );
// }

// export default App;

function App() {
  const[count,setCount] = useState(0);

  const increment =() =>{
    setCount(count+1)
  }

  const decrement =() =>{
    setCount(count-1)
  }
  const reset =() =>{
    setCount(0)
  }
  

  return (
    <>
    <h1>Count value is :{count}</h1>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
     <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;



