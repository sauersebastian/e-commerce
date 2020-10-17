import React from "react";

function Button(props) {
    return <button type="button" className="btn btn-outline-primary" onClick={props.onClick}>{props.sign}</button>
};

export default Button;