import React from "react";
import styles from "./styles.module.scss";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo"/>
      <span>Каталог товаров</span>
    </header>
  );
};
export default Header;
