import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";

export const AddressContext = createContext(null);

export const AddressProvider = ({ children }) => {
  const { authState } = useAuth();
  const [addresses, setAddresses] = useState([]);
  const [showAddressCard, setShowAddressCard] = useState(false);
  const addressFormat = {
    name: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    phoneNumber: "",
    _id: "",
  };
  const [addressFormData, setAddressFormData] = useState(addressFormat);

  const getAllAddress = async () => {
    try {
      const { status, data } = await axios({
        method: "GET",
        url: "/api/user/address",
        headers: { authorization: authState.token },
      });
      if (status === 200) {
        setAddresses(data?.address);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const removeAddressData = async (dataId) => {
    try {
      const { data, status } = await axios({
        method: "DELETE",
        url: `/api/user/address/${dataId}`,
        headers: { authorization: authState.token },
      });
      if (status === 200) {
        setAddresses(data?.address);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addAddress = async (newAddress) => {
    try {
      const { data, status } = await axios({
        method: "POST",
        url: "/api/user/address",
        data: { address: newAddress },
        headers: { authorization: authState.token },
      });
      if (status === 201) {
        setAddresses(data?.address);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const editAddress = async (address, addressId) => {
    try {
      const { data, status } = await axios.post(
        `/api/user/address/${addressId}`,
        { address: address },
        { headers: { authorization: authState.token } }
      );
      if (status === 201) {
        setAddresses(data?.address);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(
    () => {
      if (authState?.token) {
        getAllAddress();
      }
    },
    // eslint-disable-next-line
    [authState.token]
  );
  return (
    <AddressContext.Provider
      value={{
        addresses,
        setShowAddressCard,
        showAddressCard,
        removeAddressData,
        getAllAddress,
        addressFormat,
        addressFormData,
        setAddressFormData,
        addAddress,
        editAddress,
      }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
