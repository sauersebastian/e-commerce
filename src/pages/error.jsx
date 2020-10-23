import React from 'react';
import { Button } from "react-bootstrap";


export default function error() {
    return (
        <div>
            <br></br>
            <h2>El producto que estas buscando no existe :(</h2>
            <br></br>
            <Button href="/">Volver al sitio</Button>
        </div>
    )
}
