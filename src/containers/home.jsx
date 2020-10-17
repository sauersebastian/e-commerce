import React, { useState, useEffect} from "react";
import './home.scss';
import ItemList from '../components/ItemList/itemList';
import { getFirestore } from '../firebase';

export default function Home () {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    

    useEffect(() => {
        setLoading(false);
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