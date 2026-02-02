import { useState } from "react";
import { NavLink, Outlet } from "react-router";

function NavBar() {
  const [cartData, setCartData] = useState({number: 0});
  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <span>|</span>
        <NavLink to={"/shop"}>Shop</NavLink>
        <span>|</span>
        <NavLink to={"/cart"}>Cart ({cartData.number})</NavLink>
      </nav>
      <Outlet context={{cartData, setCartData}} />
    </>
  );
}

export default NavBar;
