import { useState } from 'react'
import './App.css';
import NavBar from './components/Navbar/NavBar';
import FunctionCounter from './components/FunctionCounter/FunctionCounter';
import ClassCounter from './components/ClassCounter/ClassCounter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <NavBar  title="ecommerce" color="red"/>
      <ItemListContainer greeting='Productos' />
      <button onClick={() => setShow(!show)}>{show ? 'Mostrar Class Counter' : 'Mostrar Function Counter'}</button>
      {show ? <FunctionCounter /> : <ClassCounter />}
      {/* {!show && <ClassCounter />} */}
    </div>
  );
}

export default App;