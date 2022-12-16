import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  //     <a href="#">Link 1</a>
  //     <a href="#">Link 2</a>
  //   </div>
  // </>;

  return (
    <div className="header">
      <Link to="/" className="header-img">
        <img src="../logo.svg" alt="logo" />
      </Link>
      <div className="header-right">
        <Link to="/" className="header-home">
          Home
        </Link>
        <span className="header-partner" onClick={handleClick}>
          Partner with us
        </span>
        <div
          style={{ display: isVisible ? "block" : "none" }}
          className="hidden-div"
        >
          <Link to="/driver">Driver Partner</Link>
          <br></br>
          <Link to="/merchant">Merchant Partner</Link>
        </div>
        {/* <Link to="/employee" className="header-careers">
          Careers
        </Link> */}
        {/* <span className="header-company">Company</span> */}
        <Link to="/products" className="header-products">
          Products
        </Link>
        {/* <Link to="/blog" className="header-blog">
          Blog
        </Link>
        <Link to="/help" className="header-help">
          Help
        </Link> */}
        <span className="header-lang">en</span>
      </div>
    </div>
  );
};
export default Header;
