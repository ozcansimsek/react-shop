import React, { useEffect, useState } from "react";
import { Row } from "antd";
import Product from "./Product";
import axios from "axios";

function ProductList() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/products")
  //     .then((results) => results.json())
  //     .then((products) => {
  //       setData(products);
  //     });
  // }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      const products = res.data;
      setData(products);
    });
  }, []);

  const listProducts = data.map((item) => {
    return (
      <Product
        id={item.productId}
        image={item.image}
        category={item.category}
        name={item.productName}
        price={item.price}
      />
    );
  });

  return <Row className="products-list">{listProducts}</Row>;
}

export default ProductList;

// import React, { Component } from "react";
// import { Row } from "antd";
// import Product from "./Product";

// export default class ProductList extends Component {
//   state = {
//     data: {},
//   };

//   componentDidMount() {
//     fetch("http://localhost:3000/products")
//       .then((response) => response.json())
//       .then((data) => this.setState({ data: data }));
//   }

//   listProducts = () => {
//     const dataHolder = this.state.data;
//     dataHolder.map((item) => {
//       return (
//         <Product
//           id={item.id}
//           image={item.image}
//           name={item.productName}
//           price={item.price}
//         />
//       );
//     });
//   };

//   render() {
//     return <Row className="products-list">{this.listProducts()}</Row>;
//   }
// }
