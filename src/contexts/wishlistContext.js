import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
export const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const token = localStorage.getItem("token");

  const getWishlistData = async () => {
    try {
      const { data, status } = await axios({
        method: "GET",
        url: "/api/user/wishlist",
        headers: { authorization: token },
      });
      if (status === 200) {
        setWishlist(data?.wishlist);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addWishlistData = async (wishlistData) => {
    console.log(wishlistData);
    try {
      const { data, status } = await axios({
        method: "POST",
        url: "/api/user/wishlist",
        data: { product: wishlistData },
        headers: { authorization: token },
      });
      if (status === 201) {
        setWishlist(data?.wishlist);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeWishlistData = async (dataId) => {
    try {
      const { status, data } = await axios({
        method: "DELETE",
        url: `/api/user/wishlist/${dataId}`,
        headers: { authorization: token },
      });
      if (status === 200) {
        setWishlist(data?.wishlist);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addWishlistData,
        removeWishlistData,
      }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
