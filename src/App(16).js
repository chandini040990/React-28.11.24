
import './App.css';

function App() {
  const users = [
    {id: 1, name: "ram"},
    {id: 2, name: "venkat"},
    {id: 3, name: "sree"}
  ]

  return (
    <>
    <ul>
      {users.map((user) => (
        <li key = {user.id}>{user.name}</li>
      ))}
    </ul>
    </>
  );
}
// mobile is the curreent value


export default App;

// what is key prop is the special string attribute used to identify the elements in the list of components.
//this key prop is used to identify which element is modifying, updating or deleting and it will upadate the DOM 
//reacts needs key prop

