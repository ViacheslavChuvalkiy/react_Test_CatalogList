import React from 'react';
import styles from './styles.module.scss';
import lens from '../../../assets/images/lens.png';

const NavHeader = ({textInput, handlerFilterData}) => {

  return (
    <div className={styles.navHeader}>
      <label className={styles.searchBlock}>
        <input type="text" name="search" placeholder={'Поиск'} ref={textInput}/>
        <div className={styles.navSearch} onClick={handlerFilterData}>
          <img src={lens} alt="линза"/>
          <span>Найти</span>
        </div>
      </label>
    </div>
  );
};
export default NavHeader;
