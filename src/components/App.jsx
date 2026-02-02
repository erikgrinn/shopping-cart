import { useState } from "react";
import { Outlet } from "react-router";

export default function App() {
  const [fakeStoreData, setFakeStoreData] = useState([]);

  return (
    <>
      <Outlet context={[fakeStoreData, setFakeStoreData]} />
    </>
  );
}
