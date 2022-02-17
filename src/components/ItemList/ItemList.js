import './ItemList.css';
import Item from '../Item/Item';


const ItemList = ({products}) =>{
    return(
        <>
            {products.map((product)=>(
                <Item product={product} key={product.id}/>
            ))}
        </>
    )
}


export default ItemList;