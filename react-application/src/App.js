import {Route, Switch} from 'react-router-dom';
import NavBbar from "./Components/NavBbar";
import All from './Components/All';
import Shake from './Components/Shake'
import Breakfast from './Components/Breakfast'
import Lunch from './Components/Lunch'
import NotFound from './Components/NotFound';
import Post from './Components/Post';
function App() {
  return (
    <>
    
    <NavBbar/>
          {/* <Route path="/" exact = {true}><Home/><h3>My best Page</h3></Route>       //note you can write any html here,,,  or component
          <Route path="/about"><About/></Route> */}
          <Switch>
          <Route path="/" exact  ><All /></Route>
        <Route path="/Shake" exact  ><Shake/></Route>
        <Route path="/Breakfast" exact ><Breakfast /></Route>
        <Route path="/Lunch"exact  ><Lunch /></Route>
        <Route path="/Post/:id"exact  ><Post /></Route>
        <Route path="*" exact  ><NotFound /></Route>
        </Switch>
    </>
  );
}

export default App;
