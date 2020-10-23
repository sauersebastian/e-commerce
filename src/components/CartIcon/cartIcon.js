import React from "react";
import { Badge } from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCartContext } from '../../context/cartContext';
import { orange } from "@material-ui/core/colors";

export function CartIcon(){

  const { length } = useCartContext();

  return (
    <Badge variant="light">
      <ShoppingCartIcon style={ {color: orange[500]}}/>
      <span style={ {color: orange[500]}}>{length()}</span>
    </Badge>
  );
}