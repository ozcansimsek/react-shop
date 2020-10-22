import React, { useEffect, useState } from "react";
import { Row } from "antd";
import Product from "./Product";
import axios from "axios";

function ProductList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products`, {
        params: { category: props.category },
      })
      .then((res) => {
        const products = res.data;
        setData(products);
      });
  }, []);

  return <Row className="products-list">{data.map((item) => {
    return (
      <Product
        key={item.id}
        id={item.id}
        image={item.image}
        category={item.category}
        name={item.productName}
        price={item.price}
      />
    );
  })}</Row>;
}

export default ProductList;
