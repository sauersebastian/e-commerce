import React from "react";

function Input(props) {
    return (
        <input type="text" className="w-2" onChange={props.handleChange} value={props.count} />
    )
}

export default Input;