import React, { useState, useEffect} from "react";
import ItemCount from "../ItemCount/itemCount";
import Button from "../Button/Button";
import { useCartContext } from "../../context/cartContext";
import { Media } from "react-bootstrap";
//import "./itemDetail.css";

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
            <Media>
                <img
                    width={300}
                    height={300}
                    className="mr-3"
                    src={props.product.img}
                    alt=""
                />
                <Media.Body>
                    <h4>{props.product.name}</h4>
                    <h4>{props.product.price}</h4>
                    <p>{props.product.desc}</p>
                    <ItemCount addCount={addCount} subCount={subCount} count={count}/>
                    <Button onClick={addToCart} sign={"Comprar " + count +" ahora "} />  
                </Media.Body>
            </Media>
        </div> 
    )
}