import { useState } from "react";
import Shop from "./Shop";

export default function App() {
  const [fakeStoreData, setFakeStoreData] = useState([]);

  return (
    <>
      <Shop fakeStoreData={fakeStoreData} setFakeStoreData={setFakeStoreData} />
    </>
  );
}
