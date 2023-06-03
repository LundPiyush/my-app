import React from "react";
//import {} from "react-router";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const RequireAuth = () => {
  const { authState } = useAuth();
  const location = useLocation();
  return authState?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
