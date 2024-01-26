import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [comments, setComments] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
        console.log(cart);
    }
    const removeCart = (index) => {
      setCart(['']);
    };
    const addComment = (item) => {
        setComments([...comments, item]);
    }
    const getTotalPrice = () => {
      return cart.reduce((total, product) => total + (product.price || 0), 0);
    };
  
    return (
      <CartContext.Provider value={{ cart, addToCart, removeCart, addComment, getTotalPrice }}>
        {children}
      </CartContext.Provider>
    );
  }
  
  export function useCart() {
    return useContext(CartContext);
  }