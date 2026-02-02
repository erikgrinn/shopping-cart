import { useState } from "react";
import { Outlet, useOutletContext } from "react-router";

export default function App() {
  const [fakeStoreData, setFakeStoreData] = useState([]);
  const [cartNumber, setCartNumber] = useOutletContext()

  return (
    <>
      <Outlet context={[fakeStoreData, setFakeStoreData, cartNumber, setCartNumber]} />
    </>
  );
}
