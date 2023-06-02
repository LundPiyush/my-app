import React from "react";
import "./AddressModal.css";
import { useAddress } from "../../contexts/addressContext";
import { v4 as uuid } from "uuid";

const AddressModal = () => {
  const {
    addresses,
    setShowAddressCard,
    addressFormData,
    setAddressFormData,
    addAddress,
    editAddress,
    addressFormat,
  } = useAddress();
  const dummyValues = {
    name: "Ramdev",
    area: "Golamdain",
    city: "Mumbai",
    state: "Maharashthra",
    pincode: "421003",
    phoneNumber: "1234567890",
  };

  //const { name, area, city, state, pincode, phoneNumber } = addressFormData;
  const formAddressSubmit = (e) => {
    e.preventDefault();
    const isAddressPresent = addresses.find(
      (address) => address._id === addressFormData._id
    );
    if (isAddressPresent) {
      editAddress(addressFormData, isAddressPresent._id);
    } else {
      addAddress({ ...addressFormData, _id: uuid() });
    }
    setShowAddressCard(false);
    setAddressFormData({ ...addressFormat });
  };

  return (
    <div className="address-modal">
      <h3>Add New Address</h3>
      <form
        className="address-profile-form"
        onSubmit={(e) => formAddressSubmit(e)}>
        <label className="address-profile-label">
          <input
            required
            value={addressFormData.name}
            onChange={(e) =>
              setAddressFormData({ ...addressFormData, name: e.target.value })
            }
            type="text"
            placeholder="Name"
          />
        </label>
        <label>
          <input
            required
            value={addressFormData.area}
            onChange={(e) =>
              setAddressFormData({ ...addressFormData, area: e.target.value })
            }
            type="text"
            placeholder="Area"
          />
        </label>
        <label>
          <input
            required
            value={addressFormData.city}
            onChange={(e) =>
              setAddressFormData({ ...addressFormData, city: e.target.value })
            }
            type="text"
            placeholder="City"
          />
        </label>
        <label>
          <input
            required
            value={addressFormData.state}
            onChange={(e) =>
              setAddressFormData({ ...addressFormData, state: e.target.value })
            }
            type="text"
            placeholder="State"
          />
        </label>
        <label>
          <input
            required
            value={addressFormData.pincode}
            onChange={(e) =>
              setAddressFormData({
                ...addressFormData,
                pincode: e.target.value,
              })
            }
            type="text"
            placeholder="Pincode"
          />
        </label>
        <label>
          <input
            required
            value={addressFormData.phoneNumber}
            type="text"
            onChange={(e) =>
              setAddressFormData({
                ...addressFormData,
                phoneNumber: e.target.value,
              })
            }
            placeholder="Phone Number"
          />
        </label>
        <div>
          <button className="btn-save">Save</button>
          <button
            type="button"
            className="btn-cancel"
            onClick={() => setShowAddressCard(false)}>
            Cancel
          </button>
        </div>
        <button
          className="btn-dummy"
          onClick={() => setAddressFormData({ ...dummyValues })}>
          Fill in Dummy Values
        </button>
      </form>
    </div>
  );
};

export default AddressModal;
