import React, { useEffect, useState } from 'react';
import { Container , Row, Form, Col, Button, ListGroup, Spinner } from 'react-bootstrap';
import { useCartContext } from '../context/cartContext';
import * as firebase from 'firebase/app';
import { getFirestore } from '../firebase/';
import { useForm } from "react-hook-form";
import { Redirect, Link } from "react-router-dom";


export default function Checkout() {

    const { cart, totalPrice, length, cleanCart } = useCartContext();
    const { register, errors, handleSubmit} = useForm();
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false);
    const [userId, setUserid] = useState('');
    var idGen = '';

    useEffect (() => {
        // eslint-disable-next-line no-unused-vars
        const timer = setTimeout(() => {
            setLoading(true);
        }, 2000);
    })

    async function updateStock(order){
        const db = getFirestore();
        const batch = db.batch();
        const items = order.items.map(i => ({ id: i.product.id, count: i.count}));
        const itemsToUpdate = db.collection('items').where(firebase.firestore.FieldPath.documentId(), 
            'in', 
            items.map((i) => i.id)
            );
        

        const query = await itemsToUpdate.get();
        query.docs.forEach((docSnapshot, idx) => {
            if (idx < items.length)
                batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - items[idx].count})
        })

        batch.commit().then(r => r);
        cleanCart();
    }

   
    const onSubmit = (data, e) => {
        setUser([
            ...user,
            data
        ])
        e.target.reset()

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
            idGen = id;
            setUserid(idGen);
        })
        .catch(err => {
            console.log('Error saving info: ', err);
        })
        .finally(() => {
            setLoading(false);
            updateStock(newOrder, idGen);
        });
    }

    useEffect(() => {

    },[userId]);

    function ReturnId(){
        return (
            <Container>
                <br></br>
                <h4>Compra exitosa, se registro con el código: </h4>
                <h4>{userId}</h4>
                <br></br>
                <Link to='/'><Button variant="outline-primary">Volver al sitio</Button></Link>
            </Container>    
        )
    }


    function CheckoutOrder() {

        return (
            <Container>
                <br></br>
                <Row>
                    <Col sm={8}>
                        <h4>Detalles de facturación</h4>
                        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName" width="25%">
                                    <Form.Label>Nombres <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control 
                                        name="user" 
                                        type="text" 
                                        ref={register({ 
                                            required: {
                                                value: true,
                                                message: "Este campo es requerido"
                                            }
                                            })} style={{  borderColor: errors.nameuser && "red"}}/>
                                        {errors.nameuser && <p className="error">{errors.nameuser.message}</p>}
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Apellidos <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control 
                                        name="lastname" 
                                        type="text" 
                                        ref={register({ 
                                            required: {
                                                value: true,
                                                message: "Este campo es requerido"
                                            }
                                            })} style={{  borderColor: errors.lastname && "red"}}/>
                                {errors.lastname && <p className="error">{errors.lastname.message}</p>}
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control 
                                        name="email" 
                                        type="text"
                                        ref={register({ 
                                            required: {
                                                value: true,
                                                message: "Ingrese un email"
                                            },
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: "Ingrese una dirección de email valida"
                                            },
                                        })} style={{  borderColor: errors.email && "red"}}/>
                                    {errors.email && <p className="error">{errors.email.message}</p>}
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label>Teléfono <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control 
                                        name="phone" 
                                        type="text"
                                        ref={register({ 
                                            required: {
                                                value: true,
                                                message: "Ingrese un teléfono"
                                        }
                                        })} style={{  borderColor: errors.phone && "red"}}/>
                                     {errors.phone && <p className="error">{errors.phone.message}</p>}
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
                                    <Form.Control name="zipcode" ref={register} />
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

                            <Button type="submit">Comprar ahora</Button>
                        </Form>
                    </Col>
                    <Col sm={4}>
                        <h4>Tu Orden</h4>
                        <br></br>
                        <ListGroup>
                            {cart.map(cartItem => (
                                <React.Fragment key={cartItem.product.id}>
                                    <ListGroup.Item> 
                                        {cartItem.product.name + " x " + cartItem.count + " uds."} 
                                    </ListGroup.Item>
                                </React.Fragment>
                            ))}
                            <ListGroup.Item>
                                {"Total: $" + totalPrice()}   
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }

    if (userId === '' && length() === 0 ) {
        return <Redirect to={`/`} />
    }
    else{
        if (userId !== '' && length() === 0){
            return <ReturnId />
        }
        else {
            if (!loading){
                return <Spinner animation="border" variant="warning" />
            }
            else {
                return <CheckoutOrder />
            }
        }
    }
}