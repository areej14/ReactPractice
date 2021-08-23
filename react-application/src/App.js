import React from "react";
import "./App.css";
let a = React.createElement("h1", null, "Hello .. Its areej ");
let b = React.createElement("p", null, "Class-2 task done");
let c = React.createElement("li", null, "item 1");
function App() {
  return (
    <>
      {a} {b} {c}
    </>
  );
}

export default App;
