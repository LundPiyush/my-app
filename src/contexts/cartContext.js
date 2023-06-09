import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const token = localStorage.getItem("token");
  const priceDetails = cart.reduce(
    (acc, curr) => ({
      quantity: acc.quantity + Number(curr.qty),
      totalPrice: acc.totalPrice + Number(curr.price) * Number(curr.qty),
      totalSubTotal:
        acc.totalSubTotal +
        (Number(curr.price) -
          (Number(curr.price) * Number(curr.discount)) / 100) *
          Number(curr.qty),
    }),
    { quantity: 0, totalPrice: 0, totalSubTotal: 0 }
  );

  const getCartData = async () => {
    try {
      const { data, status } = await axios({
        method: "GET",
        url: "/api/user/cart",
        headers: { authorization: token },
      });
      if (status === 201) {
        console.log(data);
        setCart(data?.cart);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addCartData = async (cartData) => {
    try {
      const { data, status } = await axios({
        method: "POST",
        url: "/api/user/cart",
        data: { product: cartData },
        headers: { authorization: token },
      });
      if (status === 200 || status === 201) {
        setCart(data?.cart);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeCartData = async (dataId) => {
    try {
      const { data, status } = await axios({
        method: "DELETE",
        url: `/api/user/cart/${dataId}`,
        headers: { authorization: token },
      });
      if (status === 200) {
        setCart(data?.cart);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const changeCartQuantity = async (dataId, updateType) => {
    try {
      const { data, status } = await axios({
        method: "POST",
        data: { action: { type: updateType } },
        url: `/api/user/cart/${dataId}`,
        headers: { authorization: token },
      });
      if (status === 200) {
        setCart(data?.cart);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(
    () => {
      getCartData();
    },
    // eslint-disable-next-line
    []
  );
  return (
    <CartContext.Provider
      value={{
        cart,
        addCartData,
        changeCartQuantity,
        removeCartData,
        priceDetails,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
