import {Route} from "react-router-dom";
import NavBbar from "./Components/NavBbar";
import All from './Components/All';
import Shake from './Components/Shake'
import Breakfast from './Components/Breakfast'
import Lunch from './Components/Lunch'
function App() {
  return (
    <>
    
    <NavBbar/>
          {/* <Route path="/" exact = {true}><Home/><h3>My best Page</h3></Route>       //note you can write any html here,,,  or component
          <Route path="/about"><About/></Route> */}
          <Route path="/" exact = {true} className="btn btn-success  mx-2" ><All /></Route>
        <Route path="/Shake"className="btn btn-warning text-white mx-2" ><Shake/></Route>
        <Route path="/Breakfast"className="btn btn-primary mx-2" ><Breakfast /></Route>
        <Route path="/Lunch"className="btn btn-info mx-2" ><Lunch /></Route>
    </>
  );
}

export default App;
