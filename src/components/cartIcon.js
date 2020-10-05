import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCartContext } from './context/cartContext';

export function CartIcon(){

  // eslint-disable-next-line no-unused-vars
  const { length } = useCartContext();

  console.log("AAAAAAAAA" + length());


    return (
    <Badge badgeContent = {length()} color="secondary">
      <ShoppingCartIcon />
    </Badge>
    );
}