

import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {Switch, Route} from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route  exact path="/products" component={Products} />
    <Route  exact path="/products/:id" component={Product} />
  
  
  </Switch>
    </>
  );
}

export default App;
