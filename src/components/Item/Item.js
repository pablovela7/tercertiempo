import './Item.css'

const Item = ({product}) => {
   
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {product.title}
                </h2>
            </header>
            <picture>
                <img src={product.img} alt={product.title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${product.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
            </footer>
        </article>
    )
}

export default Item