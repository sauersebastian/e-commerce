import React, { useState, useEffect} from "react";
import ItemList from '../components/itemList';
import { getFirestore } from '../firebase/';
import { useParams } from "react-router-dom";

export default function ItemListContainer() {

    const { id } = useParams()  
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(false);
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
