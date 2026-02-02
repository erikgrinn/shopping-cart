import { useState } from "react";
import { NavLink, Outlet } from "react-router";

function NavBar() {
  const [cartNumber, setCartNumber] = useState(0);
  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <span>|</span>
        <NavLink to={"/shop"}>Shop</NavLink>
        <span>|</span>
        <NavLink to={"/cart"}>Cart ({cartNumber})</NavLink>
      </nav>
      <Outlet context={[cartNumber, setCartNumber]} />
    </>
  );
}

export default NavBar;
