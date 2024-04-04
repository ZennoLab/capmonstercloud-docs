import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Link({title, Svg, image, desciption, linkUrl }) {
  return (
    <div className={styles.linkBlock}>
      <div className={styles.imgWrap}>
        <img src={image} className={styles.linkImg} />
      </div>
      

      <div  className={styles.titleBlock}>
        <Svg className={styles.libSvg} role="img" />
        <a href={linkUrl} className={styles.titleWrap}>
          <h3 className={styles.linkTitle}>{title}</h3>
          <img src="/img/LinkArrow.svg" className={styles.linkArr}/>
        </a>
      </div>
      <div className={styles.desciption}>
        {desciption}
      </div>
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
      image: isRULocale ? '/img/ru_dashboard.png' : '/img/en_dashboard.png',
      linkUrl: 'https://capmonster.cloud/Dashboard'
    },
    {
      title: isRULocale ? 'Расширение для браузера' : 'Browser extension',
      Svg: require('@site/static/img/Ext_icon.svg').default,
      desciption: isRULocale ? 'Автоматическое распознавание капч в браузере Chrome в фоновом режиме' : 'Automatic captcha recognition in the Chrome browser in the background',
      image: isRULocale ? '/img/ru_extension.png' : '/img/en_extension.png',
      linkUrl: 'https://chrome.google.com/webstore/detail/capmonster-cloud-%E2%80%94-automa/pabjfbciaedomjjfelfafejkppknjleh'
    },
    {
      title: isRULocale ? 'Техподдержка' : 'Support',
      Svg: require('@site/static/img/Sup_icon.svg').default,
      desciption: isRULocale ? 'Техническая поддержка, на которую можно положиться' : 'Technical support you can rely on',
      image: isRULocale ? '/img/ru_support.png' : '/img/en_support.png',
      linkUrl: 'https://helpdesk.zennolab.com/conversation/new'
    },
  ];

  return (
    <section className={styles.links}>
      <div className="container">
        <div className={styles.mainTitle}>{title}</div>

        <div className={styles.libsBlock}>
          {LinksList.map(link => (
            <Link title={link.title}
              Svg={link.Svg}
              image={link.image}
              desciption={link.desciption}
              linkUrl={link.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
