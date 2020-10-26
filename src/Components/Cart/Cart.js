import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Badge } from "antd";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <>
      <Badge
        count={cart.length}
        showZero
        size={"small"}
        offset={[0, -5]}
        style={{ color: "inherit" }}
      >
        Cart
      </Badge>
      <span> {totalPrice}₺ </span>
    </>
  );
};

export default Cart;
