import { useState } from "react";
import { useOutletContext } from "react-router";

import styles from "../styles/cards.module.css";

function Cart() {
  const { fakeStoreData, cartData, setCartData } = useOutletContext();
  const [filteredData, setFilteredData] = useState(fakeStoreData.filter((item) => item.id in cartData));

  function handleClick(e) {
    const id = e.target.value;
    const current = cartData[id] || 0;
    if (e.target.textContent === "-") {
      if (current === 0) return;
      setCartData((prev) => {
        const updated = {
          ...prev,
          number: prev.number - 1,
          [id]: current - 1,
        };
        // Remove properties with value <= 0
        return Object.fromEntries(Object.entries(updated).filter(([key, value]) => key === "number" || value > 0));
      });
      // excludes the matching id, updates state for reactive change in cart page
      // still needed to update/remove cartData so they don't reappear
      if (current === 1) {
        setFilteredData((prev) => prev.filter((item) => item.id !== Number(id)));
      }
    } else if (e.target.textContent === "+") {
      setCartData((prev) => ({
        ...prev,
        number: prev.number + 1,
        [id]: current + 1,
      }));
    }
  }
  console.log(filteredData);
  return (
    <>
      <div className={styles.cardsContainer}>
        {filteredData.map((item) => (
          <div className={styles.card} key={item.title}>
            <div className={styles.quantityCard}>{cartData[item.id] || 0}</div>
            <div className={styles.topCard}>
              <button value={item.id} onClick={handleClick}>
                -
              </button>
              <img src={item.image} alt={item.title} width={120} height={120} />
              <button value={item.id} onClick={handleClick}>
                +
              </button>
            </div>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;

// using object instead of array for context would avoid mistakes probably - also mimics props
