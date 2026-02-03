import { useEffect } from "react";
import { useOutletContext } from "react-router";

import styles from "../styles/cards.module.css";

function Shop() {
  const { fakeStoreData, setFakeStoreData, cartData, setCartData } = useOutletContext();
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
    } else if (e.target.textContent === "+") {
      setCartData((prev) => ({
        ...prev,
        number: prev.number + 1,
        [id]: current + 1,
      }));
    }
    console.log(cartData[id], cartData); // recall this shows before state updates
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setFakeStoreData(data);
    }
    fetchData();
  }, []);

  console.log(cartData);

  return (
    <>
      <div className={styles.cardsContainer}>
        {fakeStoreData.map((item) => (
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

export default Shop;

// using object instead of array for context would avoid mistakes probably - also mimics props
