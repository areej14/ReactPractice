import React from "react";
// import "./App.css";
import ClassComponent from './ClassComponent'
function App() {
 const showName = ()=>{
    alert(name)
  }
    const name = "Areej Amjad"
  const email ="areejamjad@gmail.com"
  const object = {name,email,showName}
  const array = ["Lahore", "FSD" , "SKP", "Multan",{object}]

  

  return (
    <div className="App">
   <ClassComponent  arr={array} />
     </div>
  );
}
    
  

export default App;
