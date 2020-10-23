import React from "react";
import { Badge } from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCartContext } from '../../context/cartContext';

export function CartIcon(){

  const { length } = useCartContext();

  return (
    <Badge variant="warning">
      <ShoppingCartIcon />
      {length()}
    </Badge>
  );
}