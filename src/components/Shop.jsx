import { useEffect } from "react";
import { useOutletContext } from "react-router";

import styles from "../styles/cards.module.css";

function Cards() {
  const { fakeStoreData, setFakeStoreData, cartData, setCartData } = useOutletContext();
  function handleClick(e) {
    console.log(e.target.value);
    const id = e.target.value;
    const current = cartData[id] || 0;
    // getting issues for minus
    if (e.target.textContent === "-") {
      if (current === 0) return;
      setCartData((prev) => {
        const current = prev[id] || 0;
        return {
          ...prev,
          number: prev.number - 1,
          [id]: current - 1,
        };
      });
    } else if (e.target.textContent === "+") {
      setCartData((prev) => {
        const current = prev[id] || 0;
        return {
          ...prev,
          number: prev.number + 1,
          [id]: current + 1,
        };
      });
    }
    console.log(cartData[id]); // recall this shows before state updates
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setFakeStoreData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.cardsContainer}>
        {fakeStoreData.map((item) => (
          <div className={styles.card} key={item.title}>
            <div className={styles.topCard}>
              <button onClick={handleClick}>-</button>
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

export default Cards;

// using object instead of array for context would avoid mistakes probably - also mimics props
