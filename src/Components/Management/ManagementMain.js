import React from "react";
import { Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProduct from "./AddProduct"
import RemoveProduct from "./RemoveProduct";

function AddItem(props) {
  
  const pathName = props.location.pathname;


  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  // }, [])

  // console.log(data);

  
  // const handleSubmit = (values) => {
  //   axios
  //     .get("http://localhost:3000/products")
  //     .then((res) => {
  //       const products = res.data;
  //       const length = products.length;
  //       setLastProduct(products[length - 1]);
  //       console.log(lastProduct);
  //     })
  //     .then(() => {
  //       axios.post("http://localhost:3000/products", {
  //         id: lastProduct.id + 1,
  //         productName: values.name,
  //         category: values.category,
  //         price: values.price,
  //         image: values.image,
  //       });
  //     });

  //   }


  return (
    <Router>

    <React.Fragment>
    <Menu mode="horizontal">
    <Menu.Item><Link to={`${pathName}/addproduct`}>Add Product</Link></Menu.Item>
    <Menu.Item><Link to={`${pathName}/removeproduct`}>Remove Product</Link></Menu.Item>
    <Menu.Item><Link to="/editproduct">Edit Product</Link></Menu.Item> 
    <Menu.Item><Link to="/addcategory">Add Category</Link></Menu.Item>
    <Menu.Item><Link to="/removecategory">Remove Category</Link></Menu.Item>
    <Menu.Item><Link to="/editcategory">Edit Category</Link></Menu.Item>
    </Menu>

    <Switch>
    

    <Route path={`${pathName}/addproduct`}>
    <AddProduct/>
    </Route>

    <Route path={`${pathName}/removeproduct`}>
      <RemoveProduct/>
    </Route>

    <Route path={`${pathName}/`}>
    <br/>
    <span>Please choose an operation</span>
    <br/>

    </Route>

    </Switch>
    </React.Fragment>
    </Router>
  );

};
export default AddItem;

