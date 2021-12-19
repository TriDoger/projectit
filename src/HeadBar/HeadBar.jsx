import React from "react";
import logo from "../resources/Vector.jpg";
import menu from "../resources/menu.png";
import { Dropdown } from "bootstrap";
const HeadBar = () => {
  return (
    <header className="navbar sticky-top flex-md-nowrap p-0 shadow">
      <a className="navbar-brand bg-secondary col-md-3 col-lg-2 me-0 px-3">
        <img src={menu}></img>
      </a>
      <img src={logo}></img>

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button">
            Action
          </button>
          <button class="dropdown-item" type="button">
            Another action
          </button>
          <button class="dropdown-item" type="button">
            Something else here
          </button>
        </div>
      </div>

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
