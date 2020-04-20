import React from 'react';

import './NavLinks.css';
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink exact to="/">
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/u1/places">
          MY PLACES
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/places/new">
          ADD PLACES
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/auth">
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
