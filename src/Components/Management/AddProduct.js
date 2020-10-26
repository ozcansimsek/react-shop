import React from "react";
import { Button, Form, Input, notification } from "antd";
import axios from "axios";

function AddProduct() {

  const [form] = Form.useForm();

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Done',
      description:
        'Item has been added successfully.',
      duration: 2,
      placement: "top-left"
    });
  };

  const handleSubmit = (values) => {
    axios.post("http://localhost:3000/products", {
      productName: values.name,
      category: values.category,
      price: Number(values.price),
      image: values.image,
    });
    form.resetFields();

    openNotificationWithIcon('success');

  };

  return (
    <>
    <Form
      form={form}
      name="form"
      onFinish={handleSubmit}
      style={{ zIndex: "1", margin: 50 }}
    >
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
    </>
  );
}

export default AddProduct;