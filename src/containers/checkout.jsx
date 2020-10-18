import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
//import Button from "../components/Button/Button";
import { useCartContext } from '../context/cartContext';
import * as firebase from 'firebase/app';
import { getFirestore } from '../firebase/';

export default function Checkout() {

    const { cart, totalPrice } = useCartContext();

    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({
        nameuser: " ",
        lastname: " ",
        email: " ",
        phone: " ",
        adress1: " ",
        adress2: " ",
        country: " ",
        zipcode: " ",
        city: " ",
        province: " "
    });

    function handleChange(evt) {
        const value = evt.target.value;
        setUserInfo({
          ...userInfo,
          [evt.target.name]: value
        });
        
        evt.persist()
    }

    console.log("HOLACART " + cart);

    function handleSubmit(evt) {

        const db = getFirestore();
        const orders = db.collection("orders");
        const newOrder = {
            buyer: userInfo,
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

    }

    function CheckoutOrder() {

        return (
            <div>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control type="name" name="nameuser" value={userInfo.nameuser} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="lastname" name="lastname" value={userInfo.lastname} onChange={handleChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={userInfo.email} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="phone" name="phone" value={userInfo.phone} onChange={handleChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control name="adress1" placeholder="Nombre de la calle y altura" value={userInfo.adress1} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Control name="adress2" placeholder="Departamento, suite, unidad, etc. (opcional)" value={userInfo.adress2} onChange={handleChange} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCountry">
                            <Form.Label>País</Form.Label>
                            <Form.Control name="country" value={userInfo.country} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Código Postal</Form.Label>
                            <Form.Control name="zipcode" value={userInfo.zipcode} onChange={handleChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Localidad/Ciudad</Form.Label>
                            <Form.Control name="city" value={userInfo.city} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Provincia</Form.Label>
                            <Form.Control name="province" value={userInfo.province} onChange={handleChange} />
                        </Form.Group>
                    </Form.Row>

                    <Button onClick={handleSubmit}>COMPRAR AHORA</Button>
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