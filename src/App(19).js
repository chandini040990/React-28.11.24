import {Component} from "react";

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      console.log("component has mounted")
    }, 5000);
  }
  
  render() {
    return (
      <div>
        <h1>Something</h1>
      </div>
    )
  }

}

export default App

// this is the function is called once after the component is mounted (inserted into to DOM)

// promise asyc await fetch


// compoenentdidUpdate ->for every update to the componetn this method is method is going





