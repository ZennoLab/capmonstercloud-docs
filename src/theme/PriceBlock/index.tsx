import React from 'react';
import styles from './styles.module.css';
import { SuccessRateIcon } from './icons/SuccessRateIcon';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings from '../../locales/index';
import { getPriceText } from '../../utils/price.utils';
import { CaptchaTokenType } from '../../types/price.types';
import { usePricesContext } from '../../PricesProvider';
import { Loader } from '../../components/Loader';

type PriceBlockProps = {
  title: string;
  name: CaptchaTokenType;
};

const PriceBlock = ({ title, name }: PriceBlockProps) => {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { hundredTokens, hundredImages, dynamicHundredImages, complexImageAnswers } = getLocaleStrings(currentLocale);

  const typeLocalization = {
    token: hundredTokens,
    image: hundredImages,
    dynamic: dynamicHundredImages,
    answers: complexImageAnswers,
  };

  const { priceRate, normalizedPrices, isLoading } = usePricesContext();

  if (isLoading) {
    return <Loader />;
  }

  const captchaData = normalizedPrices[name];

  if (!captchaData) {
    return null;
  }

  const { imagePath, logoPath, rate, type, price } = captchaData;

  const priceText = getPriceText({ price, priceRate, currentLocale });

  return (
    <div className={imagePath ? styles.wrapBlockImage : styles.wrapBlock}>
      <div className={styles.titleWrap}>
        <img src={`https://capmonster.cloud${logoPath}`} alt={`${name}-logo`} className={styles.captchaIcon} />
        <div className={styles.mainTitle}>{title}</div>
      </div>
      {imagePath && <img src={imagePath} alt={imagePath} />}
      <div className={styles.priceWrap}>
        <div>
          <span className={styles.priceText}>{priceText}</span>{' '}
          <span className={styles.subText}>/ {typeLocalization[type]}</span>
        </div>
      </div>

      <div className={styles.successRateBlock}>
        <SuccessRateIcon />
        <div className={styles.successRateText}>{rate}%</div>
      </div>
    </div>
  );
};

export default PriceBlock;
