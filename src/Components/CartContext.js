import React, {useState, useContext, createContext} from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;