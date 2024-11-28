import {useState} from 'react';
function App() {
  const[isOn, setIsOn] = useState(true);

  const[isVisible, setIsVisible]  = useState(false);

  const[isPasswordVisible, setIsPasswordVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const togglePwdVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)

  }
 
  return (
    <>
      <div>
        <button onClick={() => setIsOn(!isOn)}>{isOn ? "Subscribe YES" : "Not Intrested"}</button>
      </div>

      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? "Hide" : "Show"} Text
        </button>

        {isVisible && <p>Yes i am here</p>}
      </div>

      <div>
        <input
          type= {isPasswordVisible ? "text" : "password"}
          placeholder='Enter you password'

        />

        <button onClick={togglePwdVisibility}>
          {isPasswordVisible ? "Hide" : "Show"} password
        </button>
      </div>
   
    </>
  )
}
export default App

// +, - couunter

// conditional rendering....based up on the conditions we are going to show to contect

//if else