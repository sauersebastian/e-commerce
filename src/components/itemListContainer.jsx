import React, { useState, useEffect} from "react";
import ItemList from './itemList';
import { productosFile } from './productos';



function getItems() {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productosFile);
        }, 2000);
    });
}


export default function Item() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItems().then(products => {
            setItems(products);
            setLoading(false);
        });
    }, []);


    if(loading){
        return <pr>Cargando...</pr>;
    } else {
        return (
            <React.Fragment>
                {loading && <pr>Cargando...</pr>}
                {!loading && <ItemList items={items} />}
            </React.Fragment>
        )
    }
}
