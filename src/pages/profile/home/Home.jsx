import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";
import "../Profile.css";

const Home = () => {
  const { userLogout, authState } = useAuth();
  const { user } = authState;
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    navigate("/");
    userLogout();
  };
  return (
    <div className="user-content">
      <p className="user-info-name">
        <strong>Full name : </strong>
        {user.firstName} {user.lastName}
      </p>
      <p className="user-info-email">
        <strong>Email : </strong>
        {user.email}
      </p>
      <button onClick={() => handleLogoutClick()}>Log Out</button>
    </div>
  );
};

export default Home;
