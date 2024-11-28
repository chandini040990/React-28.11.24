
// counter example

// import {useState} from "react";

// function App() {

//   const[count, setCount] = useState(0);

//   return(
//     <>
//      <p>Count value is : {count}</p>
//      <button onClick={() => setCount(count + 1)}>+</button>
    
//     </>
//   )

// }

// export default App

// class component in react

import {Component} from "react";

class App extends Component {
  // initialize the state of the constructor
  constructor(){
    super(); //calling the parent class constructor
    this.state = {
      count: 100, //setting up the initials state for the counter
    }
  }
  // method to increment the count value

  increment = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }))
  }

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }))
  }

  reset = () => {
    this.setState({
      count: 0,
    })
  };

  render() {
    return (
      <>

      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
      <button onClick={this.reset}>Reset</button>
      
      </>

    )
  }

}

export default App








