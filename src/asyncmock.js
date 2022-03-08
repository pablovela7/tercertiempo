export const products = [
    { 
      id: 1, 
      name: 'Remera Pinguin',
      price: '2500',
      category: 'remeras',
      img:'https://mayoristapremium.com/wp-content/uploads/2021/08/00a02-B.jpg',
      stock: 25,
      description:'Remera Estampada de algodon mangas cortas'
    },
    { 
        id: 2,
        name: 'Buzo Pinguin',
        price: '7000',
        category: 'buzos',
        img:'https://mayoristapremium.com/wp-content/uploads/2021/07/BUZO-penguin-grisOscuro-600x606-1.jpg',
        stock: 16,
        description:'Buzo Liso'
    },
    { 
        id: 3,
        name: 'Jean',
        price: '7500',
        category: 'pantalones',
        img:'https://mayoristapremium.com/wp-content/uploads/2021/10/111JeanAzul.jpg',
        stock: 10,
        description:'Jean Clasico'
    },
    { 
        id: 4, 
        name: 'Remera Garcon Garcia',
        price: '2500',
        category: 'remeras',
        img:'https://mayoristapremium.com/wp-content/uploads/2021/07/RE-6-ET-NG.jpg',
        stock: 15,
        description:'Remera Estampada de algodon mangas cortas'
      },
      { 
        id: 5, 
        name: 'Remera Lacoste',
        price: '2500',
        category: 'remeras',
        img:'https://mayoristapremium.com/wp-content/uploads/2021/07/Remera-Lisa-Lacoste-Negro.jpg',
        stock: 15,
        description:'Remera Basica de algodon mangas cortas'
      }, { 
        id: 6, 
        name: 'Pantalon Gabardina',
        price: '5000',
        category: 'pantalones',
        img:'https://mayoristapremium.com/wp-content/uploads/2021/07/Pantalon-hollister-chupin-mostaza.jpg',
        stock: 15,
        description:'Pantalon Gabardina Chupin'
      },
      
      
]

const categories = [
    {id: 'remeras', description: 'Remeras'},
    {id: 'buzos', description: 'Buzos'},
    {id: 'camperas', description: 'Camperas'},
    {id: 'pantalones', description: 'Pantalones'}
]

export const getProducts = (idCategory) => {
    return new Promise ((resolve) => {
        const productsToResolve = idCategory ? products.filter(item => item.category === idCategory) : products
        setTimeout(() => {
            resolve(productsToResolve);
        },500);
    });
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 500)
    })
}

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}