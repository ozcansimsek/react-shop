import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Select, Button, notification } from "antd";

function RemoveProduct() {
  const { Option } = Select;
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    value: undefined,
  });

  const options = data.map((product) => (
    <Option
      key={product.id}
      value={product.id}
      filter={product.productName + " " + product.category}
    >
      Category: <strong>{product.category} </strong> , Product:
      <strong> {product.productName} </strong>
    </Option>
  ));

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Done',
      description:
        'Item has been removed successfully.',
      duration: 2,
      placement: "top-left"
    });
  };

  const handleSubmit = () => {
    axios.delete(`http://localhost:3000/products/${state.value}`, {});
    setState({ value: "" });

    openNotificationWithIcon('success');
    
  };

  useEffect(() => {
    axios.get("http://localhost:3000/products/").then((res) => {
      setData(res.data);
    });
  }, [handleSubmit]);

  const handleChange = (value) => {
    setState({
      value: value,
    });
  };

  return (
    <Form onFinish={handleSubmit}>
      <Select
        showSearch
        style={{ width: 300, margin: 50 }}
        onChange={handleChange}
        value={state.value}
        placeholder={"Please choose the product to remove."}
        defaultActiveFirstOption={false}
        filterOption={true}
        optionFilterProp={"filter"}
      >
        {options}
      </Select>

      <Button htmlType="submit" value="Submit" type="primary" danger>
        Submit
      </Button>
    </Form>
  );
}

export default RemoveProduct;
