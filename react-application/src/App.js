
import './App.css';
import Cmp1 from './Components/Cmp1';
import Cmp2 from './Components/Cmp2';
import Cmp3 from './Components/Cmp3';
import { Global } from './Components/ContextApi';

function App() {
  return (
    <>
    <Global.Provider value={{name:"Global Data"}}>
      <Cmp1 />
      <Cmp2 />
      <Cmp3 /> 
      
    </Global.Provider>
    </>
  );
}

export default App;
