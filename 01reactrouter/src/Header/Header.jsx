import React from "react";
import "../Style.css";
import { NavLink } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/Contact/ContactUs";

function Header() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <h1 className="compTitle">Company Name</h1>
          <div className="navLink">
            <ul className="listLink">
              <li>
                <NavLink to="">Home</NavLink>
              </li>
              <li>
                <NavLink to="about">About</NavLink>
              </li>
              <li>
                <NavLink to="contactUs">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="buttonContainer">
            <button className="btn signIn">Sign In</button>
            <button className="btn signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
