import React from 'react';
import styles from './styles.module.scss';
import lens from '../../../assets/images/lens.png';

const NavHeader = () => {
  return (
    <div className={styles.navHeader}>
      <label className={styles.searchBlock}>
        <input type="text" name="search" placeholder={'Поиск'}/>
        <img src={lens} alt="линза"/>
        <span>Найти</span>
      </label>
    </div>
  );
};
export default NavHeader;



