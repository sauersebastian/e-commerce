import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
    
    const [cart, setCart] = useState([]);

    const productosAgregados = () => {}

    return(
        <CartContext.Provider value={[cart, setCart, productosAgregados]}>
            {props.children}
        </CartContext.Provider>
    )
}