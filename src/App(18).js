import {Component} from "react";

class App extends Component {

  constructor(){
    super();
    this.state = {count: 0}
  }

  componentDidUpdate(prevProps, prevState){
    console.log(`Component updated! Prevoius count : ${prevState.count}, Current count ${this.state.count}`)
  }

  increment = () => {
    this.setState({count: this.state.count + 1})
  }


  componentDidMount() {
    setTimeout(() => {
      console.log("component has mounted")
    }, 5000);
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }

}

export default App

// this is the function is called once after the component is mounted (inserted into to DOM)

// promise asyc await fetch


// compoenentdidUpdate ->for every update to the componetn this method is method is going

// hook is the special functions or methods - lifecucle hooks





