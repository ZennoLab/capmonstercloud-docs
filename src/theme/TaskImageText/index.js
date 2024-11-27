import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings from '../../locales/index';
import { usePriceRate } from '../TaskImageWrapper/PriceRateProvider';

const TaskImageText = ({ price, title }) => {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { complexImageAnswers } = getLocaleStrings(currentLocale);
  const { priceRate } = usePriceRate();

  const priceText = () => {
    if (currentLocale === 'ru') {
      if (priceRate === 1) {
        return ''
      } else {
        return `${Number(price * priceRate).toFixed(2)}₽ ($${price})`
      }
      
    } else {
      return `$${price}`
    }
  }

  return (
    <div>
      {title && <strong className={`${styles.title} taskImageTitle`}>{title}</strong>}
      {price && <div className={styles.mainText}>
        {priceText()}<span className={styles.subText}> / {complexImageAnswers}</span>
      </div>}
    </div>
    
  );
};

export default TaskImageText;