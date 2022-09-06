import {useEffect} from 'react'
import './App.css';

function App() {
  function Data() {
   
    
    fetch('https://data.covid19india.org/data.json')
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
  useEffect(() => {
   Data();
    }, []);
  
  return (
    <>
    </>
  );
}

export default App;
