import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Card, Button, Image } from "antd";

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
      style={{ width: 175, margin: 15, textAlign: "center" }}
      hoverable
      cover={<Image alt={props.description} src={props.image} />}
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

// import { Card, Button } from "antd";
// import React, { Component } from "react";
// import Cart from "./Cart";
// import { CartContext } from './CartContext';

// export default class Product extends Component {
//   const [cart, setCart] = useContext(CartContext);

//   addToBasket = () => {
//     const productName = this.props.name;
//     this.setState((state) => ({
//       array: [
//         ...state.array,
//         { [productName]: { id: this.props.id, name: this.props.name } },
//       ],
//     }));
//   };

//   render() {
//     return (
//       <Card
//         style={{ width: 200, margin: 15, textAlign: "center" }}
//         hoverable
//         cover={<img alt={this.props.description} src={this.props.image} />}
//       >
//         <h3>
//           {this.props.name} - {this.props.price}₺ - {this.state.count}
//         </h3>
//         <Cart total={this.state.array}></Cart>
//         <Button onClick={this.addToBasket}>
//           <h4>Sepete Ekle</h4>
//         </Button>
//       </Card>
//     );
//   }
// }
