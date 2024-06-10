import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({id,name,img,category,description,price,stock})=>{
    const[quantityAdded, setQuantityAdded]= useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }


    return(
        <article className='CardItemDetail'>
            <header className='Header'>
                <h2 className='detailItem'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='detailItem'>
                    Categoria: {category}
                </p>
                <p className='detailItem'>
                    Descripción: {description}
                </p>
                <h3 className='detailItem'>
                    Precio: ${price} USD
                </h3>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Button'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail