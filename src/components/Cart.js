import React, { useContext } from 'react';
import { CartContext } from './context/cartContext'


export default function Cart() {

    const [cart, setCart] = useContext(CartContext);

    return (
        <div>
            <h2>Carrito</h2>
            <span>Items en el carrito: {cart.length}</span>
            <br></br>
            <span>Precio Total: 0</span>
        </div>
    )
}