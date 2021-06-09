import React from 'react';
import styles from './BasicLayout.css';

export default function BasicLayout() {
  return (
    <section className={styles.artPage}>
      <div className={styles.artHeader}>
        <h2>Project Page Name</h2>
      </div>
      <div className={styles.artBody}>
        <div className={styles.controlBar}>
          <button>Color</button>
          <input type="text"></input>
          <select></select>
        </div>
        <div className={styles.artBar}>
          <div className={styles.leftColumn}>Hey there!</div>
          <div className={styles.centerColumn}>
            <div className={styles.canvasWrapper}>
              <img src="https://i.ytimg.com/vi/PXye-6_ZB1w/hqdefault.jpg" />
            </div>
          </div>
          <div className={styles.rightColumn}>
            <button>create!</button>
          </div>
        </div>
        <div className={styles.lowerMarginBar}>this is the bottom</div>
      </div>
    </section>
  );
}
