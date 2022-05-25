const products = [
    { 
        id: '1', 
        name: 'iphone 13', 
        price: 1000, 
        category: 'celular', 
        img:'/public/images/iphone13.jpg', 
        stock: 10, 
        description:'Descripcion de Iphone 13'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}