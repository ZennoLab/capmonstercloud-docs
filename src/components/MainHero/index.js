import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function MainHero() {
  const { i18n } = useDocusaurusContext();
  const titleRu = 'Документация CapMonster Cloud';
  const titleEn = 'CapMonster Cloud Documentation'
  const title = i18n.currentLocale === 'ru' ? titleRu : titleEn;
  const descriptionRu = 'Обширный набор инструкций и рекомендаций, который поможет вам успешно использовать наш продукт для автоматического распознавания капчи и получить максимальную выгоду от его возможностей.';
  const desciptionEn = 'A comprehensive set of instructions and recommendations to help you successfully use our automatic captcha recognition tool and get the most out of its features.';
  const desciption = i18n.currentLocale === 'ru' ? descriptionRu : desciptionEn;
  const goEn = 'View';
  const goRu = 'Перейти';
  const goText = i18n.currentLocale === 'ru' ? goRu : goEn;
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.mainWrap}>
          <div className={styles.leftBlock}>
            <div className={styles.title}>{title}</div>
            <div  className={styles.subTitle}>{desciption}</div>
            <a  className={styles.btn} href="docs/getting-start">{goText}</a>
          </div>

          <img src="/img/hero.gif" className={styles.heroImg} />
        </div>
        
      </div>
    </section>
  );
}
