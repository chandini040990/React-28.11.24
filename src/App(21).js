import {useState} from 'react';
function App() {

  const[isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <>
     
     <div style={{
          backgroundColor: isDarkMode ? "black" : "green",
          color: isDarkMode ? "white" : "black",
          height: "100vh",
          textAlign: "center",
          padding: "20px"
     }}

     >
       <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} mode
      </button>
     </div>

    
   
    </>
  )
}
export default App

