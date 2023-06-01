import React from "react";
import "./Profile.css";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
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
      <Outlet />
    </div>
  );
};

export default Profile;
