import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";



export default function ItemDetailContainer(props) {
    const [item, setItem] = useState ();
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    function getItem () {
        return new Promise((res) => {
            setTimeout(() => {
                // eslint-disable-next-line eqeqeq
                res(props.product.find(x => (x.id) == (id)));
            }, 3000);
        });
    }

    useEffect(() => {
        getItem().then((data) => {
                setItem(data);
                setLoading(false);
            })
            .catch(() => console.log("rejected"));
    }, );


    return loading ? (<p>Cargando...</p>) : (
        <div>
            <ItemDetail product={item} />
        </div>
    )


}
