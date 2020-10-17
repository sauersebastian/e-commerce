import React, { useState, useEffect} from "react";
import ItemCount from "../ItemCount/itemCount";
import Button from "../Button/Button";
import { useCartContext } from "../../context/cartContext";

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
        setCount(1);
    }

    useEffect(() => {
        console.log(cart);
    }, [cart]);
   
    return (
        <div>
            {console.log("AAAA " + props.product.name)}
            
            <div className="container">
            <div className="card flex-row flex-wrap">
                <div className="card-header border-0">
                    <img src={props.product.img} alt=""></img>
                </div>
                <div className="card-block px-2">
                    <h4 className="card-title">{props.product.name}</h4>
                    <h4 className="card-title">${props.product.price}</h4>
                    <p className="card-text">{props.product.desc}</p>
                    <ItemCount addCount={addCount} subCount={subCount} count={count}/>
                    <Button onClick={addToCart} sign={"Comprar " + count +" ahora "} />           
                </div>
                <div className="w-100"></div>
            </div>
            </div>
        </div> 
    )
}