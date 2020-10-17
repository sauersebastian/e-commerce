import React from 'react';
import Item from '../Item/item';

export default function ItemList(props) {

    const productos = props.items;
       return (
        <div>
            {productos.map((product) => {
                return (        
                    <Item key={product.id} product={product} />
                )
            })}
        </div>
    )
}