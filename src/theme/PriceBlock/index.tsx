import React from 'react';
import styles from './styles.module.css';
import { SuccessRateIcon } from './icons/SuccessRateIcon';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings from '../../locales/index';
import { getPriceText } from '../../utils/price.utils';
import { PriceId } from '../../types/price.types';
import { usePricesContext } from '../../PricesProvider';
import { Loader } from '../../components/Loader';

type PriceBlockProps = {
  title?: string;
  captchaId: PriceId;
};

const PriceBlock = ({ title, captchaId }: PriceBlockProps) => {
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

  const captchaData = normalizedPrices[captchaId];

  if (!captchaData) {
    return null;
  }

  const { imagePath, LogoPath, SuccessRate, ResultType, Price, Id, Name } = captchaData;

  const priceText = getPriceText({ price: Price, priceRate, currentLocale });

  return (
    <div className={imagePath ? styles.wrapBlockImage : styles.wrapBlock}>
      <div className={styles.titleWrap}>
        <img className={styles.captchaIcon} src={`https://dash.capmonster.cloud/${LogoPath}`} alt={`${Id}-logo`} />
        <div className={styles.mainTitle}>{title ?? Name}</div>
      </div>
      {imagePath && <img src={imagePath} alt={imagePath} />}
      <div className={styles.priceWrap}>
        <div>
          <span className={styles.priceText}>{priceText}</span>{' '}
          <span className={styles.subText}>/ {typeLocalization[ResultType]}</span>
        </div>
      </div>

      <div className={styles.successRateBlock}>
        <SuccessRateIcon />
        <div className={styles.successRateText}>{SuccessRate}%</div>
      </div>
    </div>
  );
};

export default PriceBlock;
