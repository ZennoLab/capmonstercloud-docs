import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings from '../../locales/index';
import { usePricesContext } from '../../PricesProvider';
import { CaptchaTokenType } from '../../types/price.types';
import { getPriceText } from '../../utils/price.utils';
import { Loader } from '../../components/Loader';

type Props = {
  title?: string;
  name: CaptchaTokenType;
};

export const TaskImageText = ({ title, name }: Props) => {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { complexImageAnswers } = getLocaleStrings(currentLocale);
  const { priceRate, normalizedPrices, isLoading } = usePricesContext();

  if (isLoading) {
    return <Loader />;
  }

  const captchaData = normalizedPrices[name];

  if (!captchaData) {
    return null;
  }

  const { price } = captchaData;

  const priceText = getPriceText({ price, priceRate, currentLocale });

  return (
    <div>
      {title && <strong className={`${styles.title} taskImageTitle`}>{title}</strong>}
      {price && (
        <div className={styles.mainText}>
          {priceText}
          <span className={styles.subText}> / {complexImageAnswers}</span>
        </div>
      )}
    </div>
  );
};
