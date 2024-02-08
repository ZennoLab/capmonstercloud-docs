import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Prices() {
  const { i18n } = useDocusaurusContext();
  const isRULocale = i18n.currentLocale === 'ru'
  const titleRu = 'Цена';
  const titleEn = 'Price';
  const title = isRULocale ? titleRu : titleEn;
  const priceLink = isRULocale ? 'https://capmonster.cloud/prices?culture=ru-RU' : 'https://capmonster.cloud/prices?culture=en-US'

  return (
    <section className={styles.pricesWrap}>
      <div className="container">
        <div className={styles.mainTitle}>{title}</div>

        <div className={styles.prices}>
          <div className={styles.priceBlock}>
            <div className={styles.blockTitle}>
              <img src="/img/funcaptcha-icon.svg" />
              <div className={styles.priceTitle}>FunCaptcha</div>
            </div>
            <div className={styles.priceTypes}>
              <div className={styles.priceType}>
                <div className={styles.priceTypeTitle}>
                  <span>Цена за 1000 капч</span>
                  <img src="/img/image-icon.svg" />
                </div>
                <div className={styles.itemPrice}>
                  $0.15
                </div>
              </div>
              <div className={styles.priceType}>
                <div className={styles.priceTypeTitle}>
                  <span>Цена за 1000 капч</span>
                  <img src="/img/token-icon.svg" />
                </div>
                <div className={styles.itemPrice}>
                  $2
                </div>
              </div>
            </div>
            <div className={styles.paramsBlock}>
              <div className={styles.param}>
                <div className={styles.paramTitle}>
                  <img src="/img/20x20_speed.svg" />
                  <span>Скорость распознавания</span>
                </div>
                <div className={styles.speedParam}>13 сек</div>
              </div>
              <div className={styles.param}>
                <div className={styles.paramTitle}>
                  <img src="/img/20x20_success.svg" />
                  <span>Успешность распознавания</span>
                </div>
                <div className={styles.successParam}>95%</div>
              </div>
            </div>
            <div className={styles.btn}>
              Попробовать прямо сейчас
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
