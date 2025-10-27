import React from 'react';
import MainSiteBanner from './MainSiteBanner';
import styles from './styles.module.css';

export default function Banners() {
  return (
    <div className={styles.wrapper}>
      <MainSiteBanner />
    </div>
  );
}
