import React from 'react';
import styles from './styles.module.scss';

const Card = ({bsr_category, name, price, img, link}) => {

  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={img} alt="card of product"/>
      </div>
      <div className={styles.cardInfo}>
        <span className={styles.category}>{bsr_category}</span>
        <span className={styles.cardName}>{name}</span>
        <span className={styles.cardPrice}>{price}</span>
        <a href={link} target="_blank">Подробнее...</a>
      </div>
    </div>
  );
}
export default Card;