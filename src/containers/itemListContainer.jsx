import React, { useState, useEffect} from "react";
import ItemList from '../components/ItemList/itemList';
import { getFirestore } from '../firebase/';
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export default function ItemListContainer() {

    const { id } = useParams()  
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {

        // eslint-disable-next-line no-unused-vars
        const timer = setTimeout(() => {
            setLoading(true);
        }, 1000);
        
        const db = getFirestore();
        const categoryCollection = db.collection("categories").doc(id);
        const itemCollection = db.collection("items").where('categoryId', '==', categoryCollection);
        itemCollection.get()
        .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No data!');
            }
            setItems(querySnapshot.docs.map(doc => {
                return ({ id: doc.id, ...doc.data() });
            }));
        })
        .catch((error) => {
            console.log("There was an error trying to get items: ", error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [id]);
 

    return !loading ? <Spinner animation="border" variant="warning" /> : (
        <ItemList items={items} />
    )
}
