import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // Declare a state variable to store the visibility of the div
  const [isVisible, setIsVisible] = useState(false);

  // Toggle the visibility of the div when the span is clicked
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  // <>
  //   {/* Add a span element and a div with links */}
  //   <span onClick={handleClick}>Click me</span>
  //   <div style={{ display: isVisible ? "block" : "none" }}>
  //     <a href="#">NavLink 1</a>
  //     <a href="#">NavLink 2</a>
  //   </div>
  // </>;

  return (
    <div className="header">
      <NavLink to="/" className="header-img">
        <img src="../logo.svg" alt="logo" />
      </NavLink>
      <div className="header-right">
        <NavLink to="/" className="header-home">
          Home
        </NavLink>
        <span className="header-partner" onClick={handleClick}>
          Partner with us
        </span>
        <div
          style={{ display: isVisible ? "block" : "none" }}
          className="hidden-div"
        >
          <NavLink to="/driver">Driver Partner</NavLink>
          <NavLink to="/merchant">Merchant Partner</NavLink>
        </div>
        {/* <NavLink to="/employee" className="header-careers">
          Careers
        </NavLink> */}
        {/* <span className="header-company">Company</span> */}
        <NavLink to="/products" className="header-products">
          Products
        </NavLink>
        {/* <NavLink to="/blog" className="header-blog">
          Blog
        </NavLink>
        <NavLink to="/help" className="header-help">
          Help
        </NavLink> */}
        <span className="header-lang">en</span>
      </div>
    </div>
  );
};
export default Header;
