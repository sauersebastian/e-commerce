import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { useCartContext } from '../context/cartContext';
import * as firebase from 'firebase/app';
import { getFirestore } from '../firebase/';
import { useForm } from "react-hook-form";

export default function Checkout() {

    const { cart, totalPrice } = useCartContext();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    

    const onSubmit = ((user) => {
        const db = getFirestore();
        const orders = db.collection("orders");
        const newOrder = {
            buyer: user,
            items: cart,
            total: totalPrice(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        }

        orders.add(newOrder)
        .then(({ id }) => {
            console.log("ID DOCUMENTO: " + id);
        })
        .catch(err => {
            console.log('Error saving info: ', err);
        })
        .finally(() => {
            setLoading(true);
        });

    })

    function CheckoutOrder() {

        return (
            <div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control type="name" name="nameuser" ref={register}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="lastname" name="lastname" ref={register}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" ref={register}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="phone" name="phone" ref={register}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control name="adress1" placeholder="Nombre de la calle y altura" ref={register}/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Control name="adress2" placeholder="Departamento, suite, unidad, etc. (opcional)" ref={register}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCountry">
                            <Form.Label>País</Form.Label>
                            <Form.Control name="country" ref={register}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Código Postal</Form.Label>
                            <Form.Control name="zipcode" ref={register}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Localidad/Ciudad</Form.Label>
                            <Form.Control name="city" ref={register}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Provincia</Form.Label>
                            <Form.Control name="province" ref={register}/>
                        </Form.Group>
                    </Form.Row>

                    <Button type="submit">COMPRAR AHORA</Button>
                </Form>
            </div>
        );
    }

    return loading ? (<p>Cargando...</p>) : (
        <div>
            <CheckoutOrder />
        </div>
    )
}