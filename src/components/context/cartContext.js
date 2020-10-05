import React, { useContext, useState } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = (props) => {
    
    const [cart, setCart] = useState([]);

    const indexOf = (id) => cart.findIndex(i => i.product.id === id);

    const addItem = (newItem, quantity) => {
        const idx = indexOf(newItem.id);
        const updated = (idx !== -1) && (cart[idx].count += quantity) ? [...cart] : [...cart, { product: newItem, count: quantity}];
        setCart(updated);
    }

    const removeItem = (item) => {
        const idx = indexOf(item.id);
        setCart(cart.filter((i, index) => index !== idx));
    }

    const length = () => cart.reduce((total, current) => {
        console.log("total: " + total +" current count :" + current.count );
        return (total + current.count);
    }, 0);

    const clearCart = () => setCart([]);

    const totalPrice = () => cart.reduce((total, current) => {
        return total + current.count * current.product.price;
      }, 0);

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, length, clearCart, totalPrice }}>
            {props.children}
        </CartContext.Provider>
    )
}