import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asyncmock'


const ItemListContainer = () => {
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)

    // const onResize = () => {
    //     console.log('cambio el tamaño de la vantana')
    // }

    useEffect(() => {
        getProducts().then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        // window.addEventListener('resize', onResize)
        

        return (() => {
            setProducts()
            // window.removeEventListener('resize', onResize)
        })          
    }, [])
    
    return (
        <div onClick={() => console.log('hice click en itemListContainer')} className="ItemListContainer">
            {
                loading ? 
                    <h1>Cargando...</h1> :  
                products.length ? 
                    <ItemList products={products}/> : 
                    <h1>No se encontraron productos!</h1>
            }
        </div>
    )    
    
}

export default ItemListContainer