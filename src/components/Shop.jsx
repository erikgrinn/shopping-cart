import { useEffect } from "react";
import { useOutletContext } from "react-router";

import styles from "../styles/cards.module.css";

function Cards() {
  const { fakeStoreData, setFakeStoreData, cartData, setCartData } = useOutletContext();
  function handleClick(e) {
    let buttonType = e.target.textContent;
    if (buttonType === "-") {
      if (cartData.number == 0) return;
      setCartData((prev) => ({
        ...prev,
        number: prev.number - 1,
      }));
    } else if (buttonType === "+") {
      setCartData((prev) => ({
        ...prev,
        number: prev.number + 1,
      }));
    }
    //   const cardName = event.currentTarget.querySelector("img").alt;
    //   const newClickedCards = [...clickedCards, cardName];
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
              <button onClick={handleClick}>+</button>
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
