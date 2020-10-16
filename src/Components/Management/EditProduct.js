import React, { useEffect, useState } from "react";
import { Form, Select, Button, Input, notification } from "antd";
import axios from "axios";

function EditProduct() {
  const { Option } = Select;
  const [form] = Form.useForm();

  const [data, setData] = useState([]);
  const [state, setState] = useState({
    value: "",
  });

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Done',
      description:
        'Item has been modified successfully.',
      duration: 2,
      placement: "top-left"
    });
  };

  const handleSubmit = (values) => {
    axios.put(`http://localhost:3000/products/${state.value.id}`, {
      id: values.id,
      productName: values.name,
      category: values.category,
      price: Number(values.price),
      image: values.image,
    });

    form.resetFields();
    openNotificationWithIcon('success');
  };

  useEffect(() => {
    axios.get("http://localhost:3000/products/").then((res) => {
      setData(res.data);
    });
  }, []);

  const options = data.map((product) => (
    <Option
      key={product.id}
      value={product.id}
      filter={product.productName + " " + product.category}
      productdata={product}
    >
      Category: <strong>{product.category} </strong> , Product:{" "}
      <strong> {product.productName} </strong>{" "}
    </Option>
  ));

  const handleChange = (e, selected) => {
    setState({
      value: selected.productdata,
    });
  };

  useEffect(() => {
    form.setFieldsValue({
      id: state.value.id,
      name: state.value.productName,
      category: state.value.category,
      image: state.value.image,
      price: state.value.price,
    });
  }, [handleChange]);

  return (
    <React.Fragment>
      <Select
        placeholder="Choose a product to edit"
        showSearch
        style={{ width: 300, margin: 50 }}
        onChange={handleChange}
        defaultActiveFirstOption={false}
        filterOption={true}
        optionFilterProp={"filter"}
      >
        {options}
      </Select>

      <Form
        form={form}
        name="form"
        onFinish={handleSubmit}
        style={{ zIndex: "1", margin: 50 }}
      >
        <Form.Item
          label="Product ID"
          name="id"
          type="text"

          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Name"
          name="name"
          type="text"

          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Category"
          name="category"
          type="text"
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Image URL"
          name="image"
          type="text"
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          type="number"
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Button htmlType="submit" value="Submit">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
}

export default EditProduct;
