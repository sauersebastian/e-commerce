import React from 'react';
import ItemDetail from './itemDetail';

export default function ItemList(props) {

    const productos = props.items;
       return (
        <div>
            {productos.map((product) => {
                return (
                    <ItemDetail key={product.id} product={product} />
                )
            })}
        </div>
    )
}