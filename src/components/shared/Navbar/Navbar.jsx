import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { RiArrowDownSFill, RiMenuLine } from "react-icons/ri";
import "./Navbar.scss";
import MobileNav from "../MobileNavbar/MobileNavbar.jsx";
import Solutions from "./Megamenus/Solutions";
import Services from "./Megamenus/Resources";
import Partners from "./Megamenus/Partners";
import { VscTriangleUp } from "react-icons/vsc";
import { FormattedMessage } from "react-intl";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);

  function handleSideNav() {
    setSideNav(!sideNav);
  }

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(".nav-bar");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 20 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={clsx("nav-bar", isSticky ? "nav-bar_sticky" : "")}>
      <Link className="logo-container" to="/">
        <div className="logo" />
        <h6>IncorporateTax</h6>
      </Link>
      <div className="links">
        <div className="link solution-link">
          <Link to="/" className="inner-link">
            <FormattedMessage id="Navbar.Solutions" />
            <RiArrowDownSFill className="navbar-svg" />
          </Link>
          <Solutions />
        </div>
        <div className="link services-link">
          <Link to="/" className="inner-link">
            <FormattedMessage id="Navbar.Services" />
            <RiArrowDownSFill className="navbar-svg" />
          </Link>
        </div>
        <div className="link company-link">
          <Link to="/" className="inner-link">
            <FormattedMessage id="Navbar.Company" />
          </Link>
        </div>
        <div className="link resources-link">
          <Link to="/" className="inner-link">
            <FormattedMessage id="Navbar.Resources" />
            <RiArrowDownSFill className="navbar-svg" />
          </Link>
          <Services />
        </div>
        <div className="link partners-link">
          <Link to="/" className="inner-link">
            <FormattedMessage id="Navbar.Partners" />
            <RiArrowDownSFill className="navbar-svg" />
          </Link>
          <Partners />
        </div>
        <div className="link support-link">
          <Link to="/" className="inner-link">
            <FormattedMessage id="Navbar.Support" />
          </Link>
        </div>
      </div>
      <div className="authentication">
        <Link to="/Login" className="log-in">
          <FormattedMessage id="Navbar.LogIn" />
        </Link>
        <Link to="/Signup" className="sign-up">
          <FormattedMessage id="Navbar.SignUp" />
        </Link>
      </div>
      <div className="menu-icon" onClick={handleSideNav}>
        <RiMenuLine />
      </div>
      {sideNav ? <MobileNav close={handleSideNav} /> : null}
    </div>
  );
};

export default Navbar;
