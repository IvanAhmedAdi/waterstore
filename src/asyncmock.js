const products = [
    { 
        id: '1', 
        name: 'iphone13', 
        price: 1000, 
        category: 'celular', 
        img: '/images/iphone13.png', 
        stock: 10, 
        description:'Descripcion de Iphone 13'
    },
];

export const getProducts = () => {
    const ok = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ok){
                resolve(products);
            }else{
                reject('Error');
            }
            
            
        }, 2000)
    })
}