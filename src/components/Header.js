import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // Declare a state variable to store the visibility of the div
  const [isVisible, setIsVisible] = useState(false);

  // Toggle the visibility of the div when the span is clicked
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const divRef = useRef(null);

  useEffect(() => {
    // Attach an event listener to the document that listens for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    // If the user clicks outside the div, hide it
    if (divRef.current && !divRef.current.contains(event.target)) {
      divRef.current.style.display = "none";
      setIsVisible(false);
    }
  }

  return (
    <div className="header">
      <NavLink to="/" className="header-img">
        <img
          src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1671329346/logo_udz5kn.svg"
          alt="logo"
        />
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
          ref={divRef}
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
