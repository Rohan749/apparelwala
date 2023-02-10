import React, { useState, useEffect } from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";
import logo from "./logoapparel.png";
import Hamburger from "hamburger-react";
import AOS from "aos";
import "aos/dist/aos.css";

const TopNavbar = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const toggleFunc = () => {
    setOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      {isOpen && (
        <div data-aos="fade-down" className="hamburger__option">
          <div className="hamburger__body">
            <hr></hr>
            <Link to="/" onClick={toggleFunc}><div className="hamburger__links link_home">Home</div></Link>
            <Link to="/" onClick={toggleFunc}><div className="hamburger__links link_app">Our Apps</div></Link>
            <Link to="/" onClick={toggleFunc}><div className="hamburger__links link_product">Products</div></Link>
            <Link to="/" onClick={toggleFunc}><div className="hamburger__links link_about">About Us</div></Link>
          </div>
          <div className="hamburger__footer">
            <Link to="/login">
              <button onClick={toggleFunc} className="__button hamlogin_btn">
                Login
              </button>
            </Link>
            <Link to="/choose-your-business">
              <button onClick={toggleFunc} className="__button hamsignup_btn">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
      <nav data-aos="fade-zoom-in" data-aos-delay="100" className="top__navbar">
        <div className="company__name">
          <Link to="/">
            <div className="logoandcompany">
              <img className="logo__apparel" src={logo} />
              <nav>Apparelwala</nav>
            </div>
          </Link>
        </div>
        <div className="hamburger_icon">
          <Hamburger rounded toggled={isOpen} size={25} toggle={setOpen} />
        </div>
        <div className="nav__options">
          <Link to="/">Home</Link>
          <a href="#mobile-apps">Our Apps</a>
          <div>Products</div>
          <div>About Us</div>
          <div>
            <Link to="/login">
              <button className="_button login_btn">Login</button>
            </Link>
            <Link to="/choose-your-business">
              <button className="_button signup_btn">Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
