import React, { useEffect, useState } from "react";
import { Row } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Category from "./Category";

function CategoriesList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/categories").then((res) => {
      const categories = res.data;
      setData(categories);
    });
  }, []);

  return (
    <Row className="categories-list">
      {data.map((item) => {
        return (
          <Link to={`/shop/${item.name}`}>
            <Category name={item.name} image={item.image} />
          </Link>
        );
      })}
    </Row>
  );
}

export default CategoriesList;
