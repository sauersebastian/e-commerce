import React from "react";
import Button from "../Button/Button";
import { Row, Col } from "react-bootstrap";

export default function ItemCount({count, addCount, subCount, max}){
    
    return (
        <div>
            <Row>
                <Col>
                </Col>
                <Col md="auto">
                    <div className="input-group">
                        <span className="input-group-prepend">
                            <Button type="button" className="btn btn-outline-secondary btn-number" disabled="disabled" data-type="minus" onClick={ () => subCount(count - 1)} sign={"-"}>
                                <span className="fa fa-minus">-</span>
                            </Button>
                        </span>
                        <input type="text" name="quant[1]" className="form-control input-number col-xs-2" defaultValue={count} min="1" max={max}/>
                        <span className="input-group-append">
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

