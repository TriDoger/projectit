import React from "react";
import logo from "../resources/Vector.jpg";
import menu from "../resources/menu.png";
import { Dropdown, DropdownButton } from "react-bootstrap";

const HeadBar = () => {
  return (
    <header className="navbar sticky-top flex-md-nowrap p-0 shadow">
      <a className="navbar-brand bg-secondary col-md-3 col-lg-2 me-0 px-3">
        <img src={menu}></img>
      </a>
      <img src={logo}></img>

      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>

      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3" href="#">
            Sign out
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeadBar;
