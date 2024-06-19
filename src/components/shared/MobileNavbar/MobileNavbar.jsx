import { React, useState } from "react";
import { GrClose } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { Solution, Resource, Partner } from "../Navbar/data";
import "./mobileNav.scss";

const MobileNav = (props) => {
  const List = (props) => {
    return (
      <div className="dropdown-links">
        <Link>
          <div className="image">{props.item.icon}</div>
          {props.item.title}
        </Link>
      </div>
    );
  };

  const SideNavDropdown = (props) => {
    return (
      <div className="sidenav-dropdown">
        <div className="mobile-link" onClick={showList1}>
          {props.name}
          <MdKeyboardArrowDown />
        </div>
        {List1 === true && props.list.map((item) => <List item={item} />)}
      </div>
    );
  };

  const [List1, setList1] = useState(false);
  function showList1() {
    setList1(!List1);
  }
  const [List2, setList2] = useState(false);
  function showList2() {
    setList2(!List2);
  }
  const [List3, setList3] = useState(false);
  function showList3() {
    setList3(!List3);
  }

  return (
    <div className="mobile-sidenav">
      <div className="sidenav">
        <div className="sidenav-header">
          <Link to="/">
            <div className="logo" />
            <h5>IncorporateTax</h5>
          </Link>
          <div>
            <GrClose onClick={props.close} />
          </div>
        </div>
        <div className="sidenav-links">
          <SideNavDropdown name="Solution" list={Solution} />
          <SideNavDropdown name="Resources" list={Resource} />
          <SideNavDropdown name="Partners" list={Partner} />
          <div className="sidenav-dropdown">
            <div className="mobile-link">
              Services
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="sidenav-dropdown">
            <div className="mobile-link">Company</div>
          </div>
          <div className="sidenav-dropdown">
            <div className="mobile-link">Support</div>
          </div>
        </div>
        <div className="mobile-authentication">
          <Link to="/" className="mobile-signup">
            Sign Up
          </Link>
          <Link to="/Login" className="mobile-login">
            Log In
          </Link>
        </div>
      </div>
      <div className="backdrop" onClick={props.close} />
    </div>
  );
};

export default MobileNav;
