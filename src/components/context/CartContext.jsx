import React, {useState} from 'react';


const CartContext = React.createContext();


export function CartProvider({children}) {

    const[cartItems, setCartItems] = useState([]);

    const addToCart = (imgUrl, name, qty, price) => {
        setCartItems((prevState) => [...prevState, {imgUrl, name, qty, price}])
    }

    return(
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;