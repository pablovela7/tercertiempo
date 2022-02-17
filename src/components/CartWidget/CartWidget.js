import './CartWidget.css'


const CartWidget = () => {
    return(
        <button className="Option" style={{ backgroundColor: 'orange', color: 'black', fontSize: 14}}>
            <img src="./imagenes/cart.svg" alt='cart' style={{marginRight: 10}}/>
            0
        </button>
    );
}

export default CartWidget