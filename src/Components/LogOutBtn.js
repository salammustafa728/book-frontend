import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Seller.css'
const LogOutBtn = () => {
  const {isAuthenticated, logout } = useAuth0();

  return isAuthenticated && (
    <button className="btn" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogOutBtn;