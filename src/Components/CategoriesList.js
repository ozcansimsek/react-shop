import React, { useEffect, useState } from "react";
import { Card, Row } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

function CategoriesList() {
  const [data, setData] = useState([]);

  // Fetch API
  // useEffect(() => {
  //   fetch("http://localhost:3000/categories")
  //     .then((results) => results.json())
  //     .then((categories) => {
  //       setData(categories);
  //     });
  // }, []);

  useEffect(() => {
  axios
    .get("http://localhost:3000/categories")
    .then(res => {
      const categories = res.data;
      setData(categories);
    });
  }, [] )

  const listCategories = data.map((item) => {
    return (
      <Link to="#">
        <Card
          style={{ width: 200, margin: 15, textAlign: "center" }}
          hoverable
          cover={<img src={item.image} />}
        >
          <h3>{item.name}</h3>
        </Card>
      </Link>
    );
  });

  return <Row className="categories-list">{listCategories}</Row>;
}

export default CategoriesList;
