import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [comments, setComments] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
        console.log(cart);
    }
   
    return (<CartContext.Provider value={{ cart, addToCart, removeCart, addComment }}>
        {children}
    </CartContext.Provider>)
}

export function useCart() {
    return useContext(CartContext)
}
