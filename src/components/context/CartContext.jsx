import React, { useState } from 'react';


const CartContext = React.createContext();


export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (prod_id, imgUrl, name, qty, price) => {
        setCartItems((prevState) => [...prevState, { prod_id, imgUrl, name, qty, price }])
    }

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.prod_id !== itemId)
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;