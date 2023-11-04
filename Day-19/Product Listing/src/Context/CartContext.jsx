import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
 
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const AddToCart = (product) => {
    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      setCart([...cart, { ...product }]);
      localStorage.setItem("cart", JSON.stringify([...cart, { ...product }])); 
    }
  };

  const incrementQuantity = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };



  const DecrementQuantity = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        const updatedQuantity = item.quantity - 1;
  
        if (updatedQuantity > 0) {
          return { ...item, quantity: updatedQuantity };
        } else {
          return null;
        }
      }
      return item;
    });
  
    const updatedCartFiltered = updatedCart.filter((item) => item !== null);
    setCart(updatedCartFiltered);
  
    localStorage.setItem("cart", JSON.stringify(updatedCartFiltered));
  };
  

  useEffect(() => {
    const calculateTotalAmount = () => {
      const totalAmount = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTotal(totalAmount);
    };

    calculateTotalAmount();
  }, [cart]);


  const ClearCart = () => {
    setCart([]); 
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        AddToCart,
        incrementQuantity,
        DecrementQuantity,
        total,
       ClearCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
