import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div>
      <NavLink to="/" activeClassName="active-nav-link" exact>
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="active-nav-link">
        Create
      </NavLink>
      <NavLink to="/help" activeClassName="active-nav-link">
        Help
      </NavLink>
    </div>
  </header>
);

export default Header;
