import React, { useEffect, useState } from "react";
import { Card, Row } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import ProductList from "../Products";

function CategoriesList() {
  const [data, setData] = useState([]);
  const [state, setState] = useState({ display: true });

  useEffect(() => {
    axios.get("http://localhost:3000/categories").then((res) => {
      const categories = res.data;
      setData(categories);
    });
  }, []);

  return (
    <Row className="categories-list">
      {data.map((item) => {
        const categoryLink = `/category/${item.name}`;

        if (state.display) {
          return (
            <>
              <Link to={categoryLink}>
                <Card
                  style={{ width: 200, margin: 15, textAlign: "center" }}
                  hoverable
                  onClick={() => {
                    setState({ display: false });
                  }}
                  cover={<img src={item.image} alt={item.productName} />}
                >
                  <h3>{item.name}</h3>
                </Card>
              </Link>
            </>
          );
        } else {
          return (
              <Route path={categoryLink}>
                <ProductList category={item.name} />
              </Route>
          );
        }
      })}
    </Row>
  );
}

export default CategoriesList;
