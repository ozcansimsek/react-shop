import React, { useEffect, useState } from "react";
import { Row, Col, Checkbox, List, Divider, Slider, InputNumber } from "antd";
import Product from "./Product";
import axios from "axios";
import { BrowserRouter as Link } from "react-router-dom";

function ProductList(props) {
  const [productsData, setProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [state, setState] = useState({ inputValue: 10 });

  useEffect(() => {
    axios.get(`http://localhost:3000/products/`).then((res) => {
      const products = res.data;
      setProductsData(products);
    });

    axios.get("http://localhost:3000/categories").then((res) => {
      const categories = res.data;
      setCategoriesData(categories);
    });

    if (props.location.pathname.split("/")[2])
      setSelectedCategory([
        ...selectedCategory,
        props.location.pathname.split("/")[2],
      ]);
  }, []);

  const onCheck = (e) => {
    if (e.target.checked) {
      setSelectedCategory([...selectedCategory, e.target.name]);
    } else {
      let filteredArray = selectedCategory.filter(
        (item) => item !== e.target.name
      );
      setSelectedCategory(filteredArray);
    }
  };

  const onSliderChange = (value) => {
    setState({
      inputValue: value,
    });
  };

  return (
    <>
      <Row>
        <Col span={4}>
          <Divider orientation="left">Categories</Divider>
          <List size="small" bordered style={{ userSelect: "none" }}>
            {categoriesData.map((item) => {
              return (
                <>
                  <List.Item>
                    <Checkbox
                      key={item.id}
                      defaultChecked={props.location.pathname.includes(
                        item.name
                      )}
                      onChange={onCheck}
                      name={item.name}
                    >
                      {item.name}
                    </Checkbox>
                  </List.Item>
                </>
              );
            })}
          </List>
          <Divider orientation="left">Price</Divider>

          <Row>
            <Col span={12}>
              <Slider
                min={1}
                max={10}
                onChange={onSliderChange}
                value={
                  typeof state.inputValue === "number" ? state.inputValue : 0
                }
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={1}
                max={10}
                style={{ margin: "0 16px" }}
                value={state.inputValue}
                onChange={onSliderChange}
              />
            </Col>
          </Row>
        </Col>
        <Col span={20}>
          <Row className="products-list">
            {productsData.map((item) => {
              if (
                (item.price <= state.inputValue &&
                  selectedCategory.includes(item.category)) ||
                (item.price <= state.inputValue &&
                  selectedCategory.length === 0)
              )
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
    </>
  );
}

export default ProductList;
