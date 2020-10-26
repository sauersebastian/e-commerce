import React, { useContext, useState } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = (props) => {
    
    const [cart, setCart] = useState([]);

    /* Retorna el índice de un producto en el carrito */
    const indexOf = (id) => cart.findIndex(i => i.product.id === id);

    /* Agrega un item al carrito con la cantidad comprada */
    const addItem = (newItem, quantity) => {
        const idx = indexOf(newItem.id);
        const updated = (idx !== -1) && (cart[idx].count += quantity) ? [...cart] : [...cart, { product: newItem, count: quantity}];
        setCart(updated);
    }

    /* Elimina un item en su totalidad del carrito */
    const removeItem = (item) => {
        const idx = indexOf(item.id);
        setCart(cart.filter((i, index) => index !== idx));
    }

    /* Retorna la cantidad de items en el carrito */
    const length = () => cart.reduce((total, current) => {
        return total + current.count;
    }, 0);

    /* Vacía el carrito  */
    const cleanCart = () => setCart([]);

    /* Retorna la suma total de los items en el carrito */
    const totalPrice = () => cart.reduce((total, current) => {
        return (total + current.count * parseFloat(current.product.price));
      }, 0);

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, length, cleanCart, totalPrice }}>
            {props.children}
        </CartContext.Provider>
    )
}