import React, { useState } from "react";
import Item from "./item";
import ItemCount from "./itemCount";
import Button from "./Button";



export default function ItemDetail(props) {
  
    const [count, setCount] = useState(0);

    function addCount() {
        if (props.product.stock > count)
            setCount(count + 1);
    }

    function subCount() {
        if (count > 0)
            setCount(count - 1);
    }
   
    return (
        <div>
            <Item product={props.product} /> 
            <ItemCount addCount={addCount} subCount={subCount} count={count}/>
            <Button sign={"Comprar " + count +" ahora "} />
        </div>
    )
}