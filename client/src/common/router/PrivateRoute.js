import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const PrivateRoute = ({ children, roles }) => {
    const { user, isAuthenticated } = useAuthStore();

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
  
    if (roles && !roles.includes(user?.role)) {
      return <Navigate to="/unauthorized" replace />;
    }
  
    return children;
  };
  

export default PrivateRoute;
