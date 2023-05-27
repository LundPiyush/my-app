import React, { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { userSignUp } = useAuth();

  const handleSignUp = () => {
    userSignUp(signUpData);
  };
  return (
    <div>
      <div className="form">
        <h3>Sign-Up</h3>
        <label className="label">First Name:</label>
        <input
          className="input-signup"
          type="text"
          placeholder="john"
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, firstName: e.target.value }))
          }
        />
        <label className="label">Last Name:</label>
        <input
          className="input-signup"
          type="text"
          placeholder="doe"
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, lastName: e.target.value }))
          }
        />
        <label className="label">Email:</label>
        <input
          className="input-signup"
          type="email"
          placeholder="johndoe@example.com"
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <label className="label">Password:</label>
        <input
          className="input-signup"
          type="password"
          placeholder="*********"
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <button className="btn" onClick={handleSignUp}>
          Sign Up
        </button>
        <Link className="link">Forget Password ?</Link>
      </div>
    </div>
  );
};

export default SignUp;
