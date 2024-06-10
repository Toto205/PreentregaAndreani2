import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        
        <div className=''>
            <form onSubmit={handleConfirm} className='Form' action="#" autocomplete="off">
                <fieldset>
                <label for="first">Nombre completo</label>
                    <input 
                        id="first" 
                        type="text" 
                        name="first"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        required
                    />
                    <div class="after"></div>
                </fieldset>
                <fieldset>
                <label for="last">Telefono</label>
                    <input 
                        id="first" 
                        type="text" 
                        name="first"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                        required
                    />
                    <div class="after"></div>
                </fieldset>
                <fieldset>
                <label for="last">Email</label>
                    <input 
                        id="last" 
                        type="text" 
                        name="first"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        required
                    />
                    <div class="after"></div>
                </fieldset>
                <fieldset>
                    <button type='submit' className='Button'>Generar orden de compra</button>
                </fieldset>
            </form>
        </div>
    )

}

export default CheckoutForm