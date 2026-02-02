import { useState } from "react";
import { Outlet, useOutletContext } from "react-router";

export default function App() {
  const [fakeStoreData, setFakeStoreData] = useState([]);
  const {cartData, setCartData} = useOutletContext()

  return (
    <>
      <Outlet context={{fakeStoreData, setFakeStoreData, cartData, setCartData}} />
    </>
  );
}
