// import React from "react";
// import { Navigate } from "react-router-dom";

// const PublicRoute = ({ children }) => {
//   if (localStorage.getItem("token")) {
//     return <Navigate to="/" />;
//   } else {
//     return children;
//   }
// };

// export default PublicRoute;

import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const location = useLocation();

  // Redirect to home if token exists and trying to access login or register
  if (localStorage.getItem("token") && (location.pathname === "/login" || location.pathname === "/register")) {
    return <Navigate to="/" />;

  } else {
    return children;
  }
};

export default PublicRoute;
