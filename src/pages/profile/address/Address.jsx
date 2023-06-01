import React from "react";
import { useAddress } from "../../../contexts/addressContext";
import "./address.css";

const Address = () => {
  const { addresses } = useAddress();
  return (
    <div className="address-section">
      <div className="address-heading">
        <h3>My Addresses</h3>
        <button onClick={() => {}}>Add New Address</button>
      </div>
      <hr className="address-details-line" />
      <div className="address-details">
        {addresses.map((address) => {
          const { _id, name, area, city, state, pincode, phoneNumber } =
            address;
          return (
            <li key={_id} className="address-list">
              <p>{name}</p>
              <p>{area}</p>
              <p>
                {city},{state}, {pincode}
              </p>
              <p>{phoneNumber}</p>
              <div className="address-action-btn">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
              <hr className="address-details-line" />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Address;
