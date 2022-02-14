const products = [
    { id: 1, name: 'Remera Coca', price: '$2500', category: 'Remeras', img:'https://pin.it/3h9TgdV', stock: 25, description:'Remera Estampada'},
    { id: 2, name: 'Buzo Naruto', price: '$7000', category: 'Buzos', img:'https://www.remerasreflex.com/productos/buzo-naruto/#product-gallery', stock: 16, description:'Buzo Estampado'},
    { id: 3, name: 'Jean', price: '$7500', category: 'Jeans', img:'https://spanish.alibaba.com/product-detail/fashion-cheap-mens-stretchy-ripped-skinny-jeans-destroyed-taped-slim-fit-denim-men-jeans-pants-62313665087.html', stock: 10, description:'Jean'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}