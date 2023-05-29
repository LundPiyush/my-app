import { createContext, useContext, useState, useEffect } from "react";

export const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const token = localStorage.getItem("token");
  const addWishlistData = () => {};
  return (
    <WishlistContext.Provider value={{ wishlist, addWishlistData }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
