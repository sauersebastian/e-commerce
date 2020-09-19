import React from "react";
import Button from "./Button";
import Input from "./Input";


export class ItemCounter extends React.Component {

    constructor(){
        super();
        this.state = {
            count: 0
        }

        this.minCounter = 0;    // limite min
        this.maxCounter = 10;   // limite max
    }


    handleAdd = () => {
        if(this.state.count < this.maxCounter) {
            this.setState((state) => ({
                count: state.count + 1
            }));
        }
    }  

    handleSubstract = () => {
        if(this.state.count > this.minCounter) {
            this.setState((state) => ({
                count: state.count - 1
            }));
        }
    }

    render() {
    return (
        <div>
        <div>
            <Button onClick={this.handleSubstract} sign={"-"}/>
            <Input count={this.state.count} handleChange={this.handleChange}/>
            <Button onClick={this.handleAdd} sign={"+"}/>
        </div>
        <div>
            <Button sign={"Agregar al carrito"} />
        </div>
        </div>
    );
  }
}