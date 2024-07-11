import React from 'react';
import styles from './CircleAnimation.module.scss';

const CircleAnimation: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={`${styles.circle} ${styles.horizontal} ${styles.c1}`}>
          <div className={styles.wrapElectron}>
            <div className={`${styles.circle} ${styles.electron}`}></div>
          </div>
        </div>
        <div className={`${styles.circle} ${styles.vertical} ${styles.c1}`}>
          <div className={styles.wrapElectron}>
            <div className={`${styles.circle} ${styles.electron}`}></div>
          </div>
        </div>
      </div>
      <div className={`${styles.wrap} ${styles.r}`}>
        <div className={`${styles.circle} ${styles.horizontal} ${styles.c2}`}>
          <div className={styles.wrapElectron}>
            <div className={`${styles.circle} ${styles.electron}`}></div>
          </div>
        </div>
        <div className={`${styles.circle} ${styles.vertical} ${styles.c2}`}>
          <div className={styles.wrapElectron}>
            <div className={`${styles.circle} ${styles.electron}`}></div>
          </div>
        </div>
        <div className={`${styles.circle} ${styles.center}`}></div>
      </div>
    </div>
  );
};

export default CircleAnimation;