import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const authInitial = {
    isLoggedIn: false,
    user: {},
    token: "",
  };

  const [authState, authDispatch] = useReducer(authReducer, authInitial);
  const navigate = useNavigate();
  const userLogin = async (userData) => {
    try {
      const { data, status } = await axios({
        method: "POST",
        data: userData,
        url: "/api/auth/login",
      });
      if (status === 200) {
        authDispatch({ type: "set_login", payload: true });
        authDispatch({ type: "set_user", payload: data?.foundUser });
        authDispatch({ type: "set_token", payload: data?.encodedToken });
        localStorage.setItem("token", data.encodedToken);
        navigate("/products");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const userSignUp = async (signupData) => {
    console.log(signupData);
    try {
      const { data, status } = await axios({
        method: "POST",
        data: signupData,
        url: "/api/auth/signup",
      });
      if (status === 201) {
        authDispatch({ type: "set_login", payload: true });
        authDispatch({ type: "set_user", payload: data?.createdUser });
        authDispatch({ type: "set_token", payload: data?.encodedToken });
        navigate("/");
        localStorage.setItem("  token", data?.encodedToken);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const userLogout = () => {
    authDispatch({ type: "set_login", payload: false });
    authDispatch({ type: "set_user", payload: {} });
    authDispatch({ type: "set_token", payload: "" });
    localStorage.setItem("token", "");
  };

  return (
    <AuthContext.Provider
      value={{ userLogin, userSignUp, userLogout, authState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
