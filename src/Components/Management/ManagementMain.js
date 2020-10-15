import React from "react";
import { Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProduct from "./AddProduct"
import RemoveProduct from "./RemoveProduct";

function AddItem(props) {
  
  const pathName = props.location.pathname;

  return (
    <Router>

    <React.Fragment>
    <Menu mode="horizontal">
    <Menu.Item><Link to={`${pathName}/addproduct`}>Add Product</Link></Menu.Item>
    <Menu.Item><Link to={`${pathName}/removeproduct`}>Remove Product</Link></Menu.Item>
    <Menu.Item><Link to="/editproduct">Edit Product</Link></Menu.Item> 
    <Menu.Item><Link to="/addcategory">Add Category</Link></Menu.Item>
    <Menu.Item><Link to="/removecategory">Remove Category</Link></Menu.Item>
    <Menu.Item><Link to="/editcategory">Edit Category</Link></Menu.Item>
    </Menu>

    <Switch>
    

    <Route path={`${pathName}/addproduct`}>
    <AddProduct/>
    </Route>

    <Route path={`${pathName}/removeproduct`}>
      <RemoveProduct/>
    </Route>

    <Route path={`${pathName}/`}>
    <br/>
    <span>Please choose an operation</span>
    <br/>

    </Route>

    </Switch>
    </React.Fragment>
    </Router>
  );

};
export default AddItem;

