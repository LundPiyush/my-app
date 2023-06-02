import React from "react";
import { useAddress } from "../../contexts/addressContext";
import "./AddressForm.css";
import AddressModal from "../AddressModal/AddressModal";
const AddressForm = () => {
  const {
    addresses,
    showAddressCard,
    setShowAddressCard,
    addressFormData,
    setAddressFormData,
  } = useAddress();
  return (
    <div className="address-form-checkout">
      <h3 className="address-checkout-heading">Select Address</h3>
      {addresses.length === 0 && <h2>No Address added yet</h2>}
      <div className="address-checkout-list">
        {addresses.map((address) => {
          const { _id, name, city, state, area, pincode, phoneNumber } =
            address;
          return (
            <div key={_id} className="address-container">
              <input
                type="radio"
                name="address"
                checked={addressFormData._id === _id}
                onChange={() => setAddressFormData(address)}
              />
              <div key={_id} className="address-details">
                <p>{name}</p>
                <p>{area}</p>
                <p>
                  {city},{state},{pincode}
                </p>
                <p>{phoneNumber}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="add-new-address-btn"
        onClick={() => {
          setShowAddressCard(true);
          setAddressFormData({
            name: "",
            area: "",
            city: "",
            state: "",
            pincode: "",
            phoneNumber: "",
            _id: "",
          });
        }}>
        Add new Address
      </button>
      {showAddressCard && (
        <div className="profile-address-modal">
          <AddressModal />
        </div>
      )}
    </div>
  );
};

export default AddressForm;
