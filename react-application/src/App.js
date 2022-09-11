import './App.css';
// import BasicPractice from './Components/BasicPractice';
import { Route,Switch} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/About" component={About}/>
    </Switch>

    </>
  );
}

export default App;
