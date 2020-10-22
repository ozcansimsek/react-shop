import React, { useEffect, useState } from "react";
import { Row, Col, Checkbox, List, Divider } from "antd";
import Product from "./Product";
import axios from "axios";
// import { List } from "antd/lib/form/Form";

function ProductList(props) {
  const [productsData, setProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products`, {
        params: { category: props.category },
      })
      .then((res) => {
        const products = res.data;
        setProductsData(products);
      });

    axios.get("http://localhost:3000/categories").then((res) => {
      const categories = res.data;
      setCategoriesData(categories);
    });

    console.log("useffect runs");
  }, []);

  const onCheck = (e) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.name]);
    } else {
      let filteredArray = selected.filter((item) => item !== e.target.name);
      setSelected(filteredArray);
    }
  };

  console.log(selected);

  return (
    <Row>
      <Col span={4}>
        <Divider orientation="left">Categories</Divider>
        <List size="small" bordered>
          {categoriesData.map((item) => {
            return (
              <>
                <List.Item>
                  <Checkbox key={item.id} onChange={onCheck} name={item.name}>
                    {item.name}
                  </Checkbox>
                </List.Item>
              </>
            );
          })}
        </List>
      </Col>
      <Col span={20}>
        <Row className="products-list">
          {productsData.map((item) => {
            if(selected.includes(item.category) || selected.length === 0)
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
          })}
        </Row>
      </Col>
    </Row>
  );
}

export default ProductList;
