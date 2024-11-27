import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import SuccessRateIcon from './icons/SuccessRateIcon';
import RecaptchaIcon from './icons/RecaptchaIcon';
import HCaptchaIcon from './icons/HCaptchaIcon';
import TurnstileIcon from './icons/TurnstileIcon';
import GeeTestIcon from './icons/GeeTestIcon';
import FaucetIcon from './icons/FaucetIcon';
import TencentIcon from './icons/TencentIcon';
import TextCaptchaIcon from './icons/TextCaptchaIcon';
import DataDomeIcon from './icons/DataDomeIcon';
import AmazonIcon from './icons/AmazonIcon';
import ImervaIcon from './icons/ImervaIcon';
import ComplexIcon from './icons/ComplexIcon';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings from '../../locales/index';

const captchaPrices = {
  recaptchaV2Token: {
    price: 0.6,
    type: 'token',
    rate: 99,
    icon: <RecaptchaIcon />
  },
  recaptchaV3Token: {
    price: 0.9,
    type: 'token',
    rate: 99,
    icon: <RecaptchaIcon />
  },
  recaptchaV2EnterpriseToken: {
    price: 1,
    type: 'token',
    rate: 97,
    icon: <RecaptchaIcon />
  },
  recaptchaV2EnterpriseSpotifyToken: {
    price: 4,
    type: 'token',
    rate: 98,
    icon: <RecaptchaIcon />
  },
  hCaptchaToken: {
    price: 0.8,
    type: 'token',
    rate: 99,
    icon: <HCaptchaIcon />
  },
  hCaptchaImage: {
    price: 0.02,
    type: 'image',
    rate: 99,
    icon: <HCaptchaIcon />
  },
  hCaptchaEnterpriseToken: {
    price: 1,
    type: 'token',
    rate: 99,
    icon: <HCaptchaIcon />
  },
  geeTestToken: {
    price: 1.2,
    type: 'token',
    rate: 92,
    icon: <GeeTestIcon />
  },
  turnstileToken: {
    price: 1.3,
    type: 'token',
    rate: 99,
    icon: <TurnstileIcon />
  },
  basiliskToken: {
    price: 1,
    type: 'token',
    rate: 98,
    icon: <FaucetIcon />
  },
  tencentToken: {
    price: 1.6,
    type: 'token',
    rate: 99,
    icon: <TencentIcon />
  },
  textCaptchaToken: {
    price: 0.3,
    type: 'token',
    rate: 99,
    icon: <TextCaptchaIcon />
  },
  dataDomeToken: {
    price: 2.2,
    type: 'token',
    rate: 99,
    icon: <DataDomeIcon />
  },
  amazonToken: {
    price: 1.4,
    type: 'token',
    rate: 99,
    icon: <AmazonIcon />
  },
  recaptcha3x3Image: {
    price: 0.2,
    type: 'image',
    rate: 99,
    icon: <RecaptchaIcon />,
    image: <img src="/img/3x3.svg" />
  },
  recaptcha3x3DynamicImage: {
    price: 0.04,
    type: 'dynamic',
    rate: 99,
    icon: <RecaptchaIcon />,
    image: <img src="/img/3x3.svg" />
  },
  recaptcha4x4Image: {
    price: 0.1,
    type: 'image',
    rate: 99,
    icon: <RecaptchaIcon />,
    image: <img src="/img/4x4.svg" />
  },
  Imperva: {
    price: 2,
    type: 'token',
    rate: 99,
    icon: <ImervaIcon />,
  },
  bls: {
    price: 0.12,
    type: 'image',
    rate: 99,
    icon: <ComplexIcon />
  },
  complexImage: {
    price: 0.3,
    type: 'answers',
    rate: 99,
    icon: <ComplexIcon />
  },
}

const PriceBlock = ({ title, name, successRate = 0, price = 0, subText, icon }) => {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { hundredTokens, hundredImages, dynamicHundredImages, complexImageAnswers } = getLocaleStrings(currentLocale);
  const typeLocalization = {
    token: hundredTokens,
    image: hundredImages,
    dynamic: dynamicHundredImages,
    answers: complexImageAnswers
  }

  const [priceRate, setPriceRate] = useState(1)

  const updatePriceToRub = async () => {
      const url = 'https://capmonster.cloud/currency/rate?from=usd&to=rub';

      try {
          const response = await fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              }
          });

          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();

          if (data) {
            setPriceRate(data)
          }
          return data;
      } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
      }
  }

  useEffect(() => {
    updatePriceToRub()
  }, [currentLocale]);

  const priceText = () => {
    if (currentLocale === 'ru') {
      if (priceRate === 1) {
        return ''
      } else {
        return `${Number(captchaPrices[name]?.price * priceRate).toFixed(2)}₽ ($${captchaPrices[name]?.price})`
      }
      
    } else {
      return `$${captchaPrices[name]?.price || price}`
    }
  }

  return (
    <div className={captchaPrices[name]?.image ? styles.wrapBlockImage : styles.wrapBlock}>
      <div className={styles.titleWrap}>
        {captchaPrices[name]?.icon || icon}
        <div className={styles.mainTitle}>{title}</div>
      </div>
      
      {captchaPrices[name]?.image}

      <div className={styles.priceWrap}>
        <div>
          <span className={styles.priceText}>{priceText()}</span>
          <span className={styles.subText}> / {captchaPrices[name]?.type ? typeLocalization[captchaPrices[name]?.type] : subText}</span>
        </div>
      </div>

      <div className={styles.successRateBlock}>
        <SuccessRateIcon />
        <div className={styles.successRateText}>{captchaPrices[name]?.rate || successRate}%</div>
      </div>
    </div>
  );
};

export default PriceBlock;