import React from "react";
import { useAddress } from "../../contexts/addressContext";
import "./AddressForm.css";
import AddressModal from "../AddressModal/AddressModal";
const AddressForm = () => {
  const { addresses, setShowAddressCard } = useAddress();

  return (
    <div className="address-form-checkout">
      <h3 className="address-checkout-heading">Select Address</h3>
      {addresses.length === 0 && <h2>No Address added yet</h2>}
      <div className="address-checkout-list">
        {addresses.map((address) => {
          const { _id, name, city, state, area, pincode, phoneNumber } =
            address;
          console.log(name);
          return (
            <div key={_id} className="address-container">
              <input type="radio" name="address" />
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
        onClick={() => setShowAddressCard(true)}>
        Add new Address
      </button>
      {setShowAddressCard && <AddressModal />}
    </div>
  );
};

export default AddressForm;
