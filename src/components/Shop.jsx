import { useEffect } from "react";
import { useOutletContext } from "react-router";

import styles from "../styles/cards.module.css";

function Cards() {
  const [fakeStoreData, setFakeStoreData, cartNumber, setCartNumber] = useOutletContext();
  function handleClick() {
    return;
    //   const cardName = event.currentTarget.querySelector("img").alt;
    //   const newClickedCards = [...clickedCards, cardName];
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      console.log(data);
      const detailedData = [];
      for (let item of data) {
        const { title, image } = item;
        detailedData.push({
          title,
          image,
        });
      }
      setFakeStoreData(detailedData);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          {fakeStoreData.map((item) => (
            <div className={styles.card} key={item.title}>
              <img src={item.image} alt={item.title} width={120} height={120} />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
