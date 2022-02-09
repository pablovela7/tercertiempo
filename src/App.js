import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import FunctionCounter from './components/FunctionCounter/FunctionCounter';
import ClassCounter from './components/ClassCounter/ClassCounter';

function App() {
  const [show, setShow] = useState(true)


  return (
    <div className="App">
      <Navbar title="Tercer Tiempo" color="red"/>
      <button onClick={() => setShow(!show)}>Mostrar</button>
      {show ? <FunctionCounter /> : null}
      


    </div>
  );
}

export default App;
