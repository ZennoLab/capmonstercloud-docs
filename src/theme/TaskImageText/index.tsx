import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings from '../../locales/index';
import { usePricesContext } from '../../PricesProvider';
import { PriceId } from '../../types/price.types';
import { getPriceText } from '../../utils/price.utils';
import { Loader } from '../../components/Loader';

type Props = {
  title?: string;
  captchaId: PriceId;
};

export const TaskImageText = ({ title, captchaId }: Props) => {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { complexImageAnswers } = getLocaleStrings(currentLocale);
  const { priceRate, normalizedPrices, isLoading } = usePricesContext();

  if (isLoading) {
    return <Loader />;
  }

  const captchaData = normalizedPrices[captchaId];

  if (!captchaData) {
    return null;
  }

  const { Price, Name } = captchaData;
  console.log('Name', Name);
  const priceText = getPriceText({ price: Price, priceRate, currentLocale });

  return (
    <div>
      <strong className={`${styles.title} taskImageTitle`}>{title ?? Name}</strong>
      {Price && (
        <div className={styles.mainText}>
          {priceText}
          <span className={styles.subText}> / {complexImageAnswers}</span>
        </div>
      )}
    </div>
  );
};
