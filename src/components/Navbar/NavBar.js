import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => { 

  const handleRemeras = () => {
    console.log('Remeras')
  }

  const handleBuzos = () => {
    console.log('Buzos')
  }

  const handleCamperas = () => {
    console.log('Camperas')
  }

  const handleJeans = () => {
    console.log('Jeans')
  }

  return (
      <nav className="NavBar" >
        <div>
            <h3>Tercer Tiempo</h3>
        </div>
        <div className="Categories">
          <button className="Option" onClick={handleRemeras}>
            Remeras
          </button>
          <button className="Option" onClick={handleBuzos}>
            Buzos
          </button>
          <button className="Option" onClick={handleCamperas}>
            Camperas
          </button>
          <button className="Option" onClick={handleJeans}>
            Jeans
          </button>
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar
    
    
    
  