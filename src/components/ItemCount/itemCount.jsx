import React from "react";
import Button from "../Button/Button";
import { Row, Col } from "react-bootstrap";

export default function ItemCount({count, addCount, subCount}){
    
    return (
        <div>
            <Row>
                <Col>
                </Col>
                <Col xs lg="2">
                    <div className="input-group">
                        <span className="input-group-prepend">
                            <Button type="button" className="btn btn-outline-secondary btn-number" disabled="disabled" data-type="minus" onClick={ () => subCount(count - 1)} sign={"-"}>
                                <span className="fa fa-minus">-</span>
                            </Button>
                        </span>
                        <input type="text" name="quant[1]" className="form-control input-number" value={count} min="1" max="10"/>
                        <span class="input-group-append">
                            <Button type="button" className="btn btn-outline-secondary btn-number" data-type="plus" onClick={ () => addCount(count + 1)} sign={"+"}>
                                <span className="fa fa-plus">+</span>
                            </Button>
                        </span>
                    </div>
                </Col>
                <Col></Col>
            </Row>            
        </div>
    );
}

