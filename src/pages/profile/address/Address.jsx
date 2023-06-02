import React from "react";
import { useAddress } from "../../../contexts/addressContext";
import "./address.css";
import AddressModal from "../../../components/AddressModal/AddressModal";

const Address = () => {
  const {
    setAddressFormData,
    addresses,
    removeAddressData,
    showAddressCard,
    setShowAddressCard,
  } = useAddress();

  const addNewAddressHandler = () => {
    setShowAddressCard(true);
  };

  // if (authState?.token === undefined) {
  //   navigate("../login");
  // }
  if (addresses.length === 0) {
    return <h3 style={{ textAlign: "center" }}>No Address found</h3>;
  }
  const editButtonHandler = (address) => {
    setShowAddressCard(true);
    setAddressFormData({ ...address });
  };

  return (
    <div className="address-section">
      <div className="address-heading">
        <h3>My Addresses</h3>
        <button onClick={() => addNewAddressHandler()}>Add New Address</button>
      </div>
      <hr className="address-details-line" />
      <div className="address-details">
        {addresses?.map((address) => {
          const { _id, name, area, city, state, pincode, phoneNumber } =
            address;
          return (
            <div key={_id} className="address-list">
              <p>{name}</p>
              <p>{area}</p>
              <p>
                {city},{state},{pincode}
              </p>
              <p>{phoneNumber}</p>
              <div className="address-action-btn">
                <button
                  className="edit-btn"
                  onClick={() => editButtonHandler(address)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => removeAddressData(_id)}>
                  Delete
                </button>
              </div>
              <hr className="address-details-line" />
            </div>
          );
        })}
      </div>
      {showAddressCard && (
        <div className="profile-address-modal">
          <AddressModal />
        </div>
      )}
    </div>
  );
};

export default Address;
