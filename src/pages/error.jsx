import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function error() {
    return (
        <div>
            <br></br>
            <h4>El producto que estas buscando no existe :(</h4>
            <br></br>
            <Link to='/'><Button >Volver al sitio</Button></Link>
        </div>
    )
}
