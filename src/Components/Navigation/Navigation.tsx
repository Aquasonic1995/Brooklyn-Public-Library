import s from "./Navigation.module.scss";
import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li className={s.nav_li}>
          <a href={"#about"}>About</a>
        </li>
        <li className={s.nav_li}>
          <a href={"#favorites"}>Favorites</a>
        </li>
        <li className={s.nav_li}>
          <a href={"#coffee-shop"}>Coffee Shop</a>
        </li>
        <li className={s.nav_li}>
          <a href={"#contacts"}>Contacts</a>
        </li>
        <li className={s.nav_li}>
          <a href={"#library-card"}>Library Card</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
