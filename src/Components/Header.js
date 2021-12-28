import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Main from "./Main";
import Buyer from "./Buyer";
import Seller from "./Seller";
import LoginButton from "./LoginButton";
import LogOutBtn from "./LogOutBtn";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="" style={{ background: "#F8FFAE" }}>
      <nav>
        <Nav defaultActiveKey="/" as="ul" style={{ display: "flex" }}>
          <Nav.Item as="li">
            <Nav.Link href="/">
              {" "}
              <LoginButton />
              <LogOutBtn />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          {!isAuthenticated && (
            <Nav.Item as="li">
              <Nav.Link href="#Buyer">Buyer</Nav.Link>
            </Nav.Item>
          )}
          {isAuthenticated && (
            <Nav.Item as="li">
              <Nav.Link href="#Seller">Seller</Nav.Link>
            </Nav.Item>
          )}
        </Nav>
      </nav>
    </div>
  );
};

export default Header;
