import React from "react";
import { Card } from "antd";

function Category(props) {
  return (
    <Card
      style={{
        width: 175,
        height: 235,
        margin: 15,
        textAlign: "center",
        borderRadius: 10,
      }}
      hoverable
      cover={<img alt={props.description} src={props.image}/>}
      key={props.id}
    ><h3>{props.name}</h3>
    </Card>
  );
}

export default Category;
