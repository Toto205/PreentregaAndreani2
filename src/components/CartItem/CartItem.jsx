import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'



const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext (CartContext)
    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className = 'itemCart'>
            <div className = 'cartInf'>
                <h2> {name} </h2>
                <h6> CANTIDAD: {quantity} </h6>
                <h6> PRECIO POR UNIDAD: ${price} </h6>
                <h3> TOTAL: ${price * quantity} </h3>
            </div>
            <button className = 'Button' onClick = {() => handleRemove (id)} > Eliminar </button>
        </div>
    )
}


export default CartItem