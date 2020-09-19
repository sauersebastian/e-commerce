import React, { useState } from "react";

export function CounterFunction(){
    const [counter, setCounter] = useState(0);

    const incrementar = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    return (
        <div>
            <button onClick={incrementar}>Incrementar</button>
            <span>Contador: {counter}</span>
        </div>
    );
}