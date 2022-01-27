import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <NavLink to="/"> HOME </NavLink>
    <NavLink to="/greetings"> GREETINGS </NavLink>
  </nav>
);

export default Navbar;
