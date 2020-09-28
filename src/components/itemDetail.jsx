import React from "react";
import Item from "./item";
import ItemCount from "./itemCount";
import Button from "./Button";


export default function ItemDetail(props) {
  
    const onClick = () => {
        console.log("El boton fue apretado");
    }

    return (
        <div>
            <Item product={props.product} />
            <ItemCount  />
            <Button onClick={onClick} sign={"Comprar ahora"} />
        </div>
    )
}