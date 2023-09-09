import { createContext, useState } from "react";

const ShoppingContext = createContext();
export const useShoppingContext = () => {
  return useContext(ShoppingContext);
};

export const ShoppingProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favourite, setFavourite] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const addToFavourites = (product) => {
    setFavourite((prevFavourite) => [...prevFavourite, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const removeFromFavorites = (productId) => {
    setFavourite((prevFavorite) =>
      prevFavorite.filter((item) => item.id !== productId)
    );
  };
};
