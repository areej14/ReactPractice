
import './App.css';
import Cmp1 from './Components/Cmp1';
import Cmp2 from './Components/Cmp2';
import Counter from './Components/Counter';

function App() {
  return (
    <>
    <h1>HOC Practice</h1>
    <Cmp1 data={Counter} />
    <Cmp2  data={Counter} />
    {/* <Counter/> */}
    </>
  );
}

export default App;
