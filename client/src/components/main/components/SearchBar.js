import React from "react";
import styles from "./css/search.scss";

const SearchBar = ({ whereTo = "Where to?" }) => {
  return (
    <div className={styles.search}>
      <div className={styles.searchtext}>
        <img
          alt=""
          className={styles.vector}
          src="https://static.overlay-tech.com/assets/cb4103b4-2d53-449e-ba86-df0f798614d1.svg"
        />
        <p className={styles.whereTo}>{whereTo}</p>
      </div>
    </div>
  );
};

export default SearchBar;