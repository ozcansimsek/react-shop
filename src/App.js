import React from "react";
import "./App.css";
import HeaderMenu from "./Components/HeaderMenu/index";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { CartProvider } from "./Components/Cart/CartContext";
import { BrowserRouter as Router } from "react-router-dom";


const layoutStyle = {
  width: "85%",
  margin: "auto",
  marginTop: "30",
  marginBottom: "30",
};

function App() {
  return (
    <Router>
    <CartProvider>
      <Layout style={layoutStyle}>
        <HeaderMenu />
      </Layout>
    </CartProvider>
    </Router>

  );
}

export default App;
