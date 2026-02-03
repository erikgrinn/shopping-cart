import { useState } from "react";
import { NavLink, Outlet } from "react-router";

function NavBar() {
  const [fakeStoreData, setFakeStoreData] = useState([]);
  const [cartData, setCartData] = useState({ number: 0 });

  return (
    <>
      <nav>
        <NavLink to="/shopping-cart/" end>
          Home
        </NavLink>
        <span>|</span>
        <NavLink to="/shopping-cart/shop/">Shop</NavLink>
        <span>|</span>
        <NavLink to="/shopping-cart/cart/">Cart ({cartData.number})</NavLink>
      </nav>
      <Outlet context={{ fakeStoreData, setFakeStoreData, cartData, setCartData }} />
    </>
  );
}

export default NavBar;
