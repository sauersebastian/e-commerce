import React from 'react';
import ItemDetailContainer from './itemDetailContainer';

export default function ItemList(props) {

    const productos = props.items;
       return (
        <div>
            {productos.map((product) => {
                return (
                    <ItemDetailContainer key={product.id} product={product} />
                )
            })}
        </div>
    )
}