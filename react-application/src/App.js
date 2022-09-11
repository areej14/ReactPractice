import './App.css';
// import BasicPractice from './Components/BasicPractice';
import { Route,Routes} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" component={<Home/>}/>
      <Route path="/About" component={<About/>}/>
    </Routes>

    </>
  );
}

export default App;
