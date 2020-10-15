import React, { useEffect, useState } from "react";
import { Row } from "antd";
import Product from "./Product";
import axios from "axios";

function ProductList(props) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    if(props.category) {
    axios.get(`http://localhost:3000/products?category=${props.category}`).then((res) => {
      const products = res.data;
      setData(products);
    });
  } 

  else {
    axios.get(`http://localhost:3000/products`).then((res) => {
      const products = res.data;
      setData(products);
    });

  }
    
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