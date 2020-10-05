import React, { useState, useEffect} from "react";
import Item from "./item";
import ItemCount from "./itemCount";
import Button from "./Button";
import { useCartContext } from "./context/cartContext";

export default function ItemDetail(props) {
  
    const [count, setCount] = useState(1);
    const { cart, addItem } = useCartContext();

    function addCount() {
        if (props.product.stock > count)
            setCount(count + 1);
    }

    function subCount() {
        if (count > 1)
            setCount(count - 1);
    }

    const addToCart = () => {
        const product = props.product;
        console.log(product);
        addItem(product, count);
    }

    useEffect(() => {
        console.log(cart);
    }, [cart]);
   
    return (
        <div>
            <Item product={props.product} /> 
            <ItemCount addCount={addCount} subCount={subCount} count={count}/>
            <Button onClick={addToCart} sign={"Comprar " + count +" ahora "} />
        </div> 
    )
}