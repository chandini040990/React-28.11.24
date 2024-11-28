import {useState} from 'react';
function App() {
  const[isOn, setIsOn] = useState(true);

  
 
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

