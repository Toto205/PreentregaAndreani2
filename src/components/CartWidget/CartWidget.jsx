import './CartWidget.css'
import cart from './assets/carrito.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const { getQuantity } = useContext (CartContext)
    const quantity = getQuantity ()

    return(
            <Link to='/cart' className='CartWidget' >
                <div className='cartW'>
                    <img src={cart} alt="cart-widget" className='carrito' />
                    <h3 className='numberProducts'>{quantity} </h3>
                </div>
            </Link>


    )
}

export default CartWidget