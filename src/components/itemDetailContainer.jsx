import React, { useState, useEffect } from "react";
import ItemDetail from "./itemDetail";



export default function ItemDetailContainer(props) {
    const [item, setItem] = useState ();
    const [loading, setLoading] = useState(true);
    
    function getItem () {
        return new Promise((res) => {
            setTimeout(() => {
                res(props.product);
            }, 3000);
        });
    }

    useEffect(() => {
        getItem ()
            .then((data) => {
                console.log("data");
                setItem(data);
                setLoading(false);
            })
            .catch(() => console.log("rejected"));
    }, );


    return loading ? (
        <p>Cargando...</p>
    ) : (
        <div>
            <ItemDetail product={item} />
        </div>
    )


}
