import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Seller.css'
const LoginButton = () => {
  const {isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated && <button className="btn" onClick={() => loginWithRedirect()}>Log In</button>;

};

export default LoginButton;
