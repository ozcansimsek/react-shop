import React from "react";
import { Input, Form } from "antd";
import {
  SearchOutlined
} from "@ant-design/icons";

const { Search } = Input;
function SearchBox() {

  return (
    
    <Search
    className="searchbox"
      placeholder="Type to search..."
      enterButton={<SearchOutlined/>}
      size="large"
      style={{width: 500, alignSelf:"center", marginLeft:"auto"}}
      onSearch={(value) => alert(value)}
    />
     );
}

export default SearchBox;
