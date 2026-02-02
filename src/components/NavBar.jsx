// import { useState } from 'react'
import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <span>|</span>
      <NavLink to={"/shop"}>Shop</NavLink>
      <span>|</span>
      <NavLink to={"/cart"}>Cart</NavLink>
    </nav>
  );
}

export default NavBar;
