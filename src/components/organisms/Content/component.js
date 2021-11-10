import React from "react";
import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader";
import Error from "../../atoms/Error";
import styles from "./styles.module.scss";

const CardList = ({ cardList, isLoader, isError }) => {
  return isError ? (
    <Error />
  ) : isLoader ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      <div className={styles.cardList}>
        {cardList.map((item) => (
            <Card
              key={item.asin}
              img={item.img}
              name={item.name}
              bsr_category={item.bsr_category}
              price={item.price}
              link={item.link}
            />
        ))}
      </div>
    </div>
  );
};
export default CardList;
