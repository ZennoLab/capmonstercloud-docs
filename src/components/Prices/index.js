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

  const priceForCount = isRULocale ? 'Цена за 1000 капч' : 'Price per 1000 captchas';
  const speedRecognition = isRULocale ? 'Скорость распознавания' : 'Recognition speed';
  const successRecognition = isRULocale ? 'Успешность распознавания' : 'Recognition success rate';


  const seconds = isRULocale ? 'сек' : 'seconds'

  const btnText = isRULocale ? 'Попробовать прямо сейчас' : 'Try now';

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
                  <span>{priceForCount}</span>
                  <img src="/img/image-icon.svg" />
                </div>
                <div className={styles.itemPrice}>
                  $0.15
                </div>
              </div>
              <div className={styles.priceType}>
                <div className={styles.priceTypeTitle}>
                  <span>{priceForCount}</span>
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
                  <span>{speedRecognition}</span>
                </div>
                <div className={styles.speedParam}>13 {seconds}</div>
              </div>
              <div className={styles.param}>
                <div className={styles.paramTitle}>
                  <img src="/img/20x20_success.svg" />
                  <span>{successRecognition}</span>
                </div>
                <div className={styles.successParam}>95%</div>
              </div>
            </div>
            <a href="https://brocapgpt.com" className={styles.btn}>
              {btnText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
