import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { Card, Button } from "antd";

const Product = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const product = {
      name: props.name,
      price: props.price,
      image: props.image,
    };
    setCart((currentState) => [...currentState, product]);
  };
  return (
    <Card
      style={{ width: 175, height: 275, margin: 15, textAlign: "center" }}
      hoverable
      cover={<img alt={props.description} src={props.image} />}
    >
      <h3>
        {props.name} - {props.price}₺
      </h3>
      <Button onClick={addToCart}>
        <h4>Sepete Ekle</h4>
      </Button>
    </Card>
  );
};

export default Product;