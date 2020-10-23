import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/itemDetail";
import { getFirestore } from "../firebase";
import { Spinner } from "react-bootstrap";



export default function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        // eslint-disable-next-line no-unused-vars
        const timer = setTimeout(() => {
            setLoading(true);
        }, 1000);

        const db = getFirestore()
        const itemCollection = db.collection('items');
        const prod = itemCollection.doc(id);
            
        prod.get()
        .then((doc) => {
            if(!doc.exists) {
                console.log("Item does not exist!");
            }
            console.log('Item found!');
            setItem({ id: doc.id, ...doc.data() });
        })
        .catch((error) => {
            console.log('Error searching item: ', error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [id]);

    return !loading ? (<Spinner animation="border" variant="warning" />) : (
        <div>
            <ItemDetail product={item} />
        </div>
    )


}
