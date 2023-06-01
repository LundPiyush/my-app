import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AddressContext = createContext(null);

export const AddressProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const [addresses, setAddresses] = useState([]);

  const getAllAddress = async () => {
    try {
      const { status, data } = await axios.get("/api/user/address", {
        headers: { authorization: encodedToken },
      });
      if (status === 200) {
        console.log("Successfully added", data);
        setAddresses(data?.address);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(
    () => {
      getAllAddress();
    },
    // eslint-disable-next-line
    []
  );
  return (
    <AddressContext.Provider value={{ addresses }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
