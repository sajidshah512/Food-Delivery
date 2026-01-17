import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">Food at your Door</h1>
      <h2 className="h2">Admin Panel</h2>
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
