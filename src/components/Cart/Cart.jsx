import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'


const Cart = () => {

    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  
    const totalQuantity = getQuantity()
    const total = getTotal()


    if(totalQuantity === 0) {
        return (
            <>
                <h4 className = 'look'>No existe ningún producto añadido al carrito! 🛒</h4>
                    <Link className = 'Button' to = '/'> Volver al catálogo </Link>
            </>
        )
    }


    return (
        <>
            <h3 className = 'item'>TUS PRODUCTOS 🛒</h3> 
            <div className='cartProducts'>
                <div className = 'itemsCart'>
                    { cart.map (p => <CartItem key = {p.id} {...p}/>) }
                </div>
                <div className='itemFinally'>
                    <h4 className = 'cartTotal'> TOTAL: ${total} USD</h4>
                    <div className='confirm'>
                        <Link to ='/checkout' className = 'Button'> Confirmar Compra </Link>
                    </div>
                    <button  onClick = {() => clearCart ()} className = 'Button' >Vaciar Carrito</button>
                </div>
            </div>
        </>
    )


}

export default Cart
