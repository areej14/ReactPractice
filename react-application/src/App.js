import React from "react";
import "./App.css";
import pic from "./pic.jpg";

function App() {
  //Array
  const subject = [
    {
      n: "C++", sem: "1st semester",
    },
    { n: "Sys pro", sem: "5th semester" },
  ];
  //Object
 const fruit= {
    fruit1: 'apple',
    fruit2:'Orange'
  }
  fruit.fruit2="Mango"
  
  return (
    <>
      <div className="body">
      <h1 className="heading">By Areej Amjad</h1>
      <img className="image" src={pic} alt=" " /><br/>
      <h2>  {fruit.fruit2} is a fruit.</h2>
    <b> { subject.map(i => ( i.n + ' studied in ' + i.sem + " "))}</b>
    </div>
    </>
  );
}

export default App;
