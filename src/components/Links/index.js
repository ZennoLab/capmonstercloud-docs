import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Link({title, image, desciption, bottomBlock }) {
  return (
    <div className={styles.linkBlock}>
      <div className={styles.blockLinkFlex}>
        <div className={styles.imgWrap}>
          <img src={image} className={styles.linkImg} />
        </div>
        <div>
          <h3 className={styles.linkTitle}>{title}</h3>
          <div className={styles.desciption}>
            {desciption}
          </div>
        </div>
      </div>
      <div className={styles.bottomBlock}>{bottomBlock && bottomBlock}</div>
    </div>
  );
}

export default function Links() {
  const { i18n } = useDocusaurusContext();
  const isRULocale = i18n.currentLocale === 'ru'
  const titleRu = 'Полезные ссылки';
  const titleEn = 'Useful links';
  const title = isRULocale ? titleRu : titleEn;

  const LinksList = [
    {
      title: 'CapMonster Cloud',
      Svg: require('@site/static/img/CapCloud_icon.svg').default,
      desciption: isRULocale ? 'Облачный сервис для автоматического распознавания reCAPTCHA, hCaptcha и других видов капч' : 'Cloud service for automatic recognition of reCAPTCHA, hCaptcha and other types of captchas',
      image: '/img/Cap_img.png',
      linkUrl: 'https://capmonster.cloud/Dashboard'
    },
    {
      title: isRULocale ? 'Расширение для браузера' : 'Browser extension',
      Svg: require('@site/static/img/Ext_icon.svg').default,
      desciption: isRULocale ? 'Автоматическое распознавание капч в браузере Chrome в фоновом режиме' : 'Automatic captcha recognition in the Chrome browser in the background',
      image: '/img/Ext_img.png',
      linkUrl: 'https://brocapgpt.com'
    },
    {
      title: isRULocale ? 'Техподдержка' : 'Support',
      Svg: require('@site/static/img/Sup_icon.svg').default,
      desciption: isRULocale ? 'Техническая поддержка, на которую можно положиться' : 'Technical support you can rely on',
      image: '/img/Sup_img.png',
      linkUrl: 'https://helpdesk.zennolab.com/conversation/new'
    },
  ];

  return (
    <section className={styles.links}>
      <div className="container">
        <div className={styles.mainTitle}>{title}</div>

        <div className={styles.libsBlock}>
          <Link
            title="BroCapGPT"
            image="/img/84x84_dashboard.svg"
            desciption={isRULocale ? 'Облачный AI сервис для автоматического распознавания капч' : 'Cloud AI service for automatic captcha recognition'}
            bottomBlock={<a href="https://brocapgpt.com/sign-up" className={styles.btn}>{isRULocale ? 'Перейти' : 'Try now'}</a>}
          />
          <Link
            title={isRULocale ? 'Расширение для браузера' : 'Browser extension'}
            image="/img/84x84_extention.svg"
            desciption={isRULocale ? 'Автоматическое решение капч в фоновом режиме браузера Chrome или Firefox' : 'Automatic captcha solving in the background of Chrome or Firefox browser'}
            bottomBlock={<div className={styles.btns}><div className={styles.btn}><img src="img/24x24_chrome.svg"/><span>{isRULocale ? 'Установить' : 'Install'}</span></div><div className={styles.btn}><img src="img/24x24_firefox.svg"/><span>{isRULocale ? 'Установить' : 'Install'}</span></div></div>}
          />
          {/* <Link
            title="Техподдержка"
            image="/img/84x84_chat.svg"
            desciption="Решение Ваших вопросов"
            bottomBlock={<div className={styles.btn}>Обратиться</div>}
          /> */}
        </div>
      </div>
    </section>
  );
}
