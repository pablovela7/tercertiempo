import './NavBar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({title,color}) => { 
  
  const handleInicio=() => {
    console.log('Inicio')
  }

  const handleProductos=() => {
    console.log('Productos')
  }

  const handleLocales=() => {
    console.log('Locales')
  }

  const handleContacto=() => {
    console.log('Contacto')
  }
    
    
    
    
  return (
      <nav className="NavBar">
        <div>
          <h3>{title}</h3>
        </div>
        <div className="Categories">
          <Button label='Remeras' backgroundColor='red' colorText='white' handleClick={handleInicio} />
          <Button label='Buzos'  handleClick={handleProductos}  />
          <Button label='Jeans'  handleClick={handleLocales} />
          <Button label='Camperas'  handleClick={handleContacto}  />

        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar