import { Outlet, useOutletContext } from "react-router";

export default function App() {
  const {fakeStoreData, setFakeStoreData, cartData, setCartData} = useOutletContext()

  return (
    <>
      <Outlet context={{fakeStoreData, setFakeStoreData, cartData, setCartData}} />
    </>
  );
}
