import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Tooltip } from 'react-tooltip';
import getLocaleStrings from '../../locales/index';
import { localesMappings } from '../../locales/index';

export default function Prices() {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { priceTitle, priceSubTitle, priceSubTooltipText } = getLocaleStrings(currentLocale);

  const priceLink = `https://capmonster.cloud/prices?culture=${localesMappings[currentLocale] || localesMappings.en}`;

  // Используем ref для iframe
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState('auto'); // начальная высота

  useEffect(() => {
    // Функция для обработки сообщения от iframe
    const handleIframeMessage = (event) => {
      // Проверяем источник сообщения
      if (event.origin === 'https://capmonster.cloud') {
        // Обновляем высоту iframe
        setIframeHeight(`${event.data}px`);
      }
    };

    // Добавляем слушателя событий
    window.addEventListener('message', handleIframeMessage);

    // Удаляем слушателя при размонтировании компонента
    return () => {
      window.removeEventListener('message', handleIframeMessage);
    };
  }, []);

  return (
    <section className={styles.pricesWrap} id="price">
      <div className="container">
        <div className={styles.mainTitle}>{priceTitle}</div>
        <div className={`${styles.subTitle} priceSub`}>{priceSubTitle}</div>
        <Tooltip anchorSelect=".priceSub" place="top" style={{ backgroundColor: 'white', color: "#222" }}>
          {priceSubTooltipText}
        </Tooltip>
        <div className={styles.prices}>
          {/* Устанавливаем высоту для iframe динамически */}
          <iframe
            ref={iframeRef}
            src={priceLink}
            style={{ width: '100%', height: iframeHeight, border: 'none' }}
          />
        </div>
      </div>
    </section>
  );
}