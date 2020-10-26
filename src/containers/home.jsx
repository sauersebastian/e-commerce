import React, { useState, useEffect} from "react";
import './home.scss';
import ItemList from '../components/ItemList/itemList';
import { getFirestore } from '../firebase';
import { Spinner, Container } from "react-bootstrap";

/* Contenedor para la vista del listado completo de productos  */

export default function Home () {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        const timer = setTimeout(() => {
            setLoading(true);
        }, 3000);

        const db = getFirestore();
        const itemCollection = db.collection("items");
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
    }, []);

 
    return !loading ? <Spinner animation="border" variant="warning" /> : (
        <Container>
            <ItemList items={items} />
        </Container>
    )
}