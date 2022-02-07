import './NavBar.css'

const NavBar = () => {
    
  return (
      <nav className="NavBar">
        <div>
          <p>Tercer Tiempo</p>
        </div>
        <div className="Categories">
          <button className='Option'>Inicio</button>
          <button className='Option'>Productos</button>
          <button className='Option'>Contacto</button>
          <button className='Option'>Locales</button>

        </div>
      </nav>
  )
}

export default NavBar