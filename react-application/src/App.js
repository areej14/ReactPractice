

import Cardmap from "./Components/Cardmap";
import React from "react";
import { Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <h2>Menu Card</h2>
      <div className="btns">
        <Link to="/" className="btn btn-success  mx-2" >All</Link>
        <Link to="/Shake"className="btn btn-warning text-white mx-2" >Shake</Link>
        <Link to="/Breakfast"className="btn btn-primary mx-2" >Breakfast</Link>
        <Link to="Lunch"className="btn btn-info mx-2" >Lunch</Link>
        <Link to="/Clear"className="btn btn-danger mx-2">Clear</Link>
      </div>
      {/* <Cardmap /> */}
    </>
  );
}

export default App;
