import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../contexts/authContext";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { userLogin } = useAuth();

  const testUserData = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  const handleLogin = () => {
    // validation of email and password
    userLogin(userData);
  };
  const handleTestLogin = () => {
    userLogin(testUserData);
  };
  return (
    <div>
      <div className="form">
        <h3>Login</h3>
        <label className="label">Email:</label>
        <input
          className="login-input"
          type="email"
          placeholder="johndoe@example.com"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <label className="label">Password:</label>
        <input
          className="login-input"
          type="password"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <button className="btn" onClick={handleLogin}>
          Login
        </button>
        <button className="btn" onClick={handleTestLogin}>
          Login with Test credentials
        </button>
        <Link></Link>

        <Link className="link" to="/sign-up">
          Create a new account
        </Link>
      </div>
    </div>
  );
};

export default Login;
