import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Select, Button } from "antd";

function RemoveProduct() {

    const {Option} = Select;
    const [data, setData] = useState([]);
    const [state, setState] = useState({
        value: undefined,
    })

  const options = data.map((product) => (
    <Option key={product.id} value={product.id} pName={product.productName} >Category: <strong>{product.category} </strong> , Product: <strong> {product.productName} </strong> </Option>
  ));

  const handleSubmit = () => {
    axios.delete(`http://localhost:3000/products/${state.value}`, {});

    setState({value: ""})
  };

  useEffect(() => {
    axios.get("http://localhost:3000/products/")
    .then((res) => {
      setData(res.data);
    });
  }, [handleSubmit]);

//   const handleSearch = value => {
//     if (value) {
//       fetch(value, data => setState({ value: data }));
//     }
//   };

  const handleChange = value => {
      setState({
          value: value,
      })
  }

  return (
    <Form onFinish={handleSubmit} >
      <Select
        // showSearch
        style={{width: 300, margin: 50}}
        onChange={handleChange}
        value={state.value}
        placeholder={"Please choose the product to remove."}
        // style={this.props.style}
        // defaultActiveFirstOption={false}
        // showArrow={false}
        // filterOption={false}
        // onSearch={handleSearch}
        // notFoundContent={null}
      >
        {options}
      </Select>

      <Button htmlType="submit" value="Submit" type="primary" danger >Submit</Button>
    </Form>
  );
}

export default RemoveProduct;
