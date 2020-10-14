import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Table, Image, Button, notification } from "antd";
import { DeleteFilled } from "@ant-design/icons";

function CartView() {
  const [cart, setCart] = useContext(CartContext);

  const removeItem = (item) => {
    const currentCart = cart;
    currentCart.splice(item,1);
    setCart([...currentCart]);
  };


  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Done',
      description:
        'Item has been removed successfully.',
      duration: 1,
      placement: "top-left"
    });
  };

  const columns = [
    {
      title: "#",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Img",
      dataIndex: "image",
      render: (text, record, index) => (
        <Image src={cart[index].image} width={75} height={75} />
      ),
    },
    {
      title: "Product",
      dataIndex: "name",
    },
    {
      title: "Price ₺",
      dataIndex: "price",
    },
    {
      title: "Remove",
      render: (text, record, index) => (
        <Button onClick={() => {
          removeItem(index);
          openNotificationWithIcon('success');
         } }><DeleteFilled style={{ fontSize: 24 }} /></Button>
      ),
    },
  ];

  return <Table dataSource={cart} columns={columns} pagination={false}></Table>;
}

export default CartView;
