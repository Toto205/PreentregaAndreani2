const products = [
    {
        id:'1',
        name:'Zapatillas Hombre Adidas Messianico',
        price: 60,
        category:'zapatillas',
        img:'https://assets.adidas.com/images/w_600,f_auto,q_auto/38392b6d01174b6487aeaf9c00adabe2_9366/Zapatos_de_Futbol_X_Speedportal_Messi.1_Terreno_Firme_Naranjo_GZ5148_22_model.jpg',
        stock:25,
        description:'Mucho estilo'
    },
    {id: '2', name:'Lentes Ray Ban Aviator Classic', price:120, category:'lentes', img:'https://cdn.shopify.com/s/files/1/0591/1432/4156/products/p-rb3025w3234-1-a7e46660-35cc-4c8d-88f5-2750c354e255_f8620d5e-bd78-4160-8b0c-b988dfe4be4b.jpg?v=1682449102', stock:7,description:'Tremendo estilo aviador'},
    {id: '3', name: 'Gorra Adidas Classic Mujer', price:18, category: 'gorras', img: 'https://falabella.scene7.com/is/image/FalabellaCO/11590285_1?wid=800&hei=800&qlt=70', stock:45,description:'Gorra mujer estiloso'},
    {id: '4', name: 'Lentes Oakley Mega Wayfarer', price:67, category: 'lentes', img: 'https://cdn.shopify.com/s/files/1/0591/1432/4156/products/p-oo91029102e8-3-d2449894-cb68-40c0-adbc-4ba0b4dc7e01.jpg?v=1682531482', stock:12,description:'Tremendos lentes'},
    {id: '5', name: 'Zapatillas Nike Run 5 Mujer', price:55, category: 'zapatillas', img: 'https://m.media-amazon.com/images/I/61ck5zWk7xL._AC_UY1000_.jpg', stock:23,description:'Especiales para salir a correr'},
    {id: '6', name: 'Gorra Nike Tech Swoosh', price:20, category: 'gorras', img: 'https://images.nike.com/is/image/DotCom/CZ6408_010_A_PREM?hei=3144&wid=3144&fmt=jpg&bgc=F5F5F5&iccEmbed=1', stock:32,description:'Gorra especial para salir'},
    {id: '7', name: 'Gorra Cocaine & Gaviar', price:30, category: 'gorras', img: 'https://www.magic-custom.com/11444-large_product/snapback-cocaine-caviar.jpg', stock:7,description:'Gorra alta gama'},
    {id: '8', name: 'Zapatillas Nike Total 90', price:35, category: 'zapatillas', img: 'https://i.pinimg.com/236x/a5/76/4a/a5764a9a1336e47c8dd5b8484a3c6b4e--wide-feet-football-boots.jpg', stock:3,description:'Pura nostalgia'},
    {id: '9', name: 'Zapatillas Puma Nitro 2 Hombre', price:45, category: 'zapatillas', img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/376807/12/sv01/fnd/CHL/w/1000/h/1000/fmt/png', stock:16,description:'Buenas zapatillas'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}