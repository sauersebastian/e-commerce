import React from 'react';

export default function ItemList(props) {

    const productos = props.items;
 

    return (
        <ul>
            {productos.map(p => <li key={p.id}>{p.name}</li>)}
        </ul>
    )

}