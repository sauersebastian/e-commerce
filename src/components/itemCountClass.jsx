import React from 'react';


// COMO CLASE
export class ItemCounterClass extends React.Component {

    constructor(){
        super();
        this.state = {
            counter: 0,
        };
    }

    incrementar = () => {
        this.setState((estadoPrevio) => ({counter: estadoPrevio.counter++}));
    };

    render() {
        return (
            <div>
                <button onClick={this.incrementar}>Incrementar</button>
                <span>Contador: {this.state.counter}</span>
            </div>
        );
    }
}