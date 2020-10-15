import React, { useEffect, useState } from "react";
import { Card, Row } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import ProductList from "./ProductList";

function CategoriesList() {
  const [data, setData] = useState([]);
  const [state, setState] = useState({ display: true });

  useEffect(() => {
    axios.get("http://localhost:3000/categories").then((res) => {
      const categories = res.data;
      setData(categories);
    });
  }, []);

  const listCategories = data.map((item) => {
    const categoryLink = `/category/${item.name}`;

    if (state.display) {
      return (
        <React.Fragment>
          <Link to={categoryLink}>
            <Card
              style={{ width: 200, margin: 15, textAlign: "center" }}
              hoverable
              onClick={() => {
                setState({ display: false });
              }}
              cover={<img src={item.image} />}
            >
              <h3>{item.name}</h3>
            </Card>
          </Link>
        </React.Fragment>
      );
    } else {
      return (
        <Switch>
          <Route path={categoryLink}>
            <ProductList category={item.name} />
          </Route>
        </Switch>
      );
    }
  });

  return (
    <Router>
      <Row className="categories-list">{listCategories} </Row>
    </Router>
  );
}

export default CategoriesList;
