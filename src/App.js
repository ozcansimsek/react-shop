import React from "react";
import "./App.css";
import HeaderMenu from "./Components/HeaderMenu";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { CartProvider } from "./Components/CartContext";

const { Header, Footer, Sider, Content } = Layout;
const layoutStyle = {
  width: "85%",
  margin: "auto",
  marginTop: "30",
  marginBottom: "30",
};

function App() {
  return (
    <CartProvider>
      <Layout style={layoutStyle}>
        <HeaderMenu />
        <Layout>
          <Sider></Sider>
          <Content></Content>
        </Layout>
      </Layout>
    </CartProvider>
  );
}

export default App;