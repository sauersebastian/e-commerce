import React, { useState } from "react";
import ItemCount from "../ItemCount/itemCount";
import { useCartContext } from "../../context/cartContext";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import "./itemDetail.css";

export default function ItemDetail(props) {
  
    const [count, setCount] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const { cart, addItem } = useCartContext();

    function addCount() {
        if (props.product.stock > count)
            setCount(count + 1);
    }

    function subCount() {
        if (count > 1)
            setCount(count - 1);
    }

    const addToCart = () => {
        const product = props.product;
        addItem(product, count);
        setCount(1);
    }

    function ItemWithStock() {
        return (
            <div>
                <Container>
                    <Card>
                        <Row>
                            <Col>
                                <Card.Img className="photo" variant="top" src={props.product.img} alt=""/>
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title><h2>{props.product.name}</h2></Card.Title>
                                    <Card.Title>$ {props.product.price}</Card.Title>
                                    <br></br>
                                    <strong>Descripción</strong>
                                    <Card.Text>{props.product.desc}</Card.Text>
                                    <strong>Stock:</strong> {props.product.stock} unidades.
                                    <br></br>
                                    <Container>
                                    <br></br>
                                    <br></br>
                                        <Row>
                                            <Col xs={4}>
                                                <ItemCount addCount={addCount} subCount={subCount} count={count} max={props.product.stock}/>
                                            </Col>
                                            <Col>
                                                <Button variant="outline-primary" onClick={addToCart}>Comprar {count} ahora</Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>  
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </div> 
        )
    }

    function ItemWithoutStock() {
        return (
            <div>
                <Container>
                    <Card>
                        <Row>
                            <Col>
                                <Card.Img className="photo" variant="top" src={props.product.img} alt=""/>
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title><h2>{props.product.name}</h2></Card.Title>
                                    <Card.Title>$ {props.product.price}</Card.Title>
                                    <br></br>
                                    <strong>Descripción</strong>
                                    <Card.Text>{props.product.desc}</Card.Text>
                                    <strong>Stock:</strong> {props.product.stock} unidades.
                                    <br></br>
                                    <Container>
                                    <br></br>
                                    <br></br>
                                    </Container>
                                </Card.Body>  
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </div> 
        )
    }

    return (props.product.stock > 0) ? <ItemWithStock /> : <ItemWithoutStock />
}