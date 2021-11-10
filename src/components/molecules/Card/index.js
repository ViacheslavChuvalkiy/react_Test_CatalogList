import React from 'react';
import styles from './styles.module.scss';

const Card = ({bsr_category, name, price, img, link}) => {

  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={img} alt="card of product"/>
        <span>{price}</span>
      </div>
      <div className={styles.cardInfo}>
        <span>{bsr_category}</span>
        <span className={styles.cardName}>{name}</span>
        <a href={link} className={styles.cardLink} target="_blank">Подробнее...</a>
      </div>
    </div>
  );
}
export default Card;