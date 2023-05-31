import React from "react";
import "./Profile.css";
import { useAuth } from "../../contexts/authContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { authState } = useAuth();
  const { user } = authState;
  return (
    <div className="profile-section">
      <ul className="profile-list">
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/profile/address">Address</Link>
        </li>
        <li>
          <Link>Order summary</Link>
        </li>
      </ul>
      <hr className="profile-line" />
      <div className="user-content">
        <p className="user-info-name">
          <strong>Full name : </strong>
          {user.firstName} {user.lastName}
        </p>
        <p className="user-info-email">
          <strong>Email : </strong>
          {user.email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
