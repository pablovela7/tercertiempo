import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({product}) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('Hice click en el boton')
    }
   
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {product.name}
                </h2>
            </header>
            <picture>
                <img src={product.img} alt={product.name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${product.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${product.id}`}>Ver detalle</Link>
                <button onClick={handleClick}>Boton</button>
            </footer>
        </article>
    )
}

export default Item