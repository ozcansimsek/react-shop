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
import ProductList from "./ProductList";
import CategoriesList from "./CategoriesList";
import ManagementMain from "./Management/ManagementMain";
import Cart from "./Cart";
import CartView from "./CartView";

const { SubMenu } = Menu;

function HeaderMenu() {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    console.log("click", e);
    setCurrent({ current: e.key });
  };

  return (
    <Router>
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
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          <Link to="/shop">Shop</Link>
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Categories">
          <Menu.ItemGroup title="Gıda">
            <Menu.Item key="meyve">Meyve</Menu.Item>
            <Menu.Item key="sebze">Sebze</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Ev">
            <Menu.Item key="setting:3">Temizlik</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

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
        <Route exact path="/shop" component={ProductList}></Route>
        <Route exact path="/management" component={ManagementMain}></Route>
        <Route path="/" component={CategoriesList}></Route>
      </Switch>
    </Router>
  );
}

export default HeaderMenu;