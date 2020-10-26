import React, { useState } from "react";
import { Menu } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import SearchBox from "./SearchBox";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductList from "../Products";
import CategoriesList from "../Categories";
import ManagementMain from "../Management";
import Cart from "../Cart/Cart";
import CartView from "../Cart/CartView";
import Home from "../Home";

const { SubMenu } = Menu;

function HeaderMenu() {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    console.log("click", e);
    setCurrent({ current: e.key });
  };

  return (
    <>
      <header>
        <h1>React Shop</h1>
      </header>
      <Menu
        theme="dark"
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{ display: "flex" }}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="shop" icon={<AppstoreOutlined />}>
          <Link to="/shop">Shop</Link>
        </Menu.Item>
        <Menu.Item key="category" icon={<SettingOutlined />}>
          <Link to="/category">Categories</Link>
        </Menu.Item>

        <Menu.Item icon={<PlusOutlined />}>
          <Link to="/management">Management</Link>
        </Menu.Item>

        <SearchBox />

        <Menu.Item
          icon={<ShoppingCartOutlined />}
          style={{ alignSelf: "flex-end", maxWidth: 200, marginLeft: 20 }}
        >
          <Link to="/cart">
            <Cart />
          </Link>
        </Menu.Item>
      </Menu>

      <Switch>
        <Route exact path="/cart" component={CartView}></Route>
        <Route path="/category" component={CategoriesList} r></Route>
        <Route path="/shop" component={ProductList}></Route>
        <Route exact path="/management" component={ManagementMain}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </>
  );
}

export default HeaderMenu;
