import './Checkout.css'
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import {getDocs, collection, query, where, Timestamp,writeBatch,documentId, addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom';
import {db} from '../../services/firebase/firebaseConfig'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const [fecha, setFecha] = useState(null);
    const [hora, setHora] = useState(null);
    const { cart,getTotal,clearCart } = useContext(CartContext)

    useEffect(() => {
        const obtenerFechaActual = () => {
        const fechaActual = new Date();
    
        const dia = fechaActual.getDate();
        const mes = fechaActual.getMonth() + 1;
        const año = fechaActual.getFullYear();
        const fechaFormateada = `${dia}/${mes}/${año}`;
        setFecha(fechaFormateada);
    
        const horas = fechaActual.getHours();
        const minutos = fechaActual.getMinutes();
        const segundos = fechaActual.getSeconds();
        const horaFormateada = `${horas}:${minutos}:${segundos.toString().padStart(2, '0')}`;
        setHora(horaFormateada);
        };
    
        obtenerFechaActual();
    }, []);


    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)
    
        try{
            const objOrder = {
                buyer: {
                    name,phone,email
                },
                items:cart,
                total:getTotal(),
                date:Timestamp.fromDate(new Date())
            }
    
            const batch = writeBatch(db)
    
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where (documentId(), 'in', ids))
            )
    
            const { docs } = productsAddedFromFirestore
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if (stockDb >= prodQuantity){
                    batch.updated(doc.ref, {stock:stockDb - prodQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0){
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(orderRef, objOrder)
    
                setOrderId(orderAdded.id)
                clearCart()
            }else{
                console.log('hay productos que estan fuera de stock')
            }
    
        } catch (error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    
        if(loading) {
            return <h1 className='orderId'>Se esta generando su orden...</h1>
        }
    
        if(orderId) {
            return <div><h1 className='orderId'>Compra realizada el dia {fecha} a las {hora}.</h1><h1 className='orderId'>El id de su orden es: {orderId}</h1><Link className = 'Button' to = '/'> Volver al catálogo </Link></div>
            
        }


        return (
            <div>
                <h3 className='checkout'>CHECKOUT 💻</h3>
                <CheckoutForm onConfirm={createOrder}/>
            </div>
        )

}

export default Checkout