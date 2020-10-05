import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function ItemCount({count, addCount, subCount}){
    
    return (
        <div>
            <Button onClick={ () => subCount(count - 1)} sign={"-"} />
            <Input count={count} />
            <Button onClick={ () => addCount(count + 1)} sign={"+"} />
        </div>
    );
}

