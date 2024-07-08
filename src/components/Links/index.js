import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings from '../../locales/index';

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
  const { currentLocale } = i18n;
  const { linksTitle, linkOneTitle, linkOneDescription, linkTwoTitle, linkTwoDescription, linkThreeTitle, linkThreeDescription } = getLocaleStrings(currentLocale);
  const isRULocale = currentLocale === 'ru';

  const LinksList = [
    {
      title: linkOneTitle,
      Svg: require('@site/static/img/CapCloud_icon.svg').default,
      desciption: linkOneDescription,
      image: isRULocale ? '/img/ru_dashboard.png' : '/img/en_dashboard.png',
      linkUrl: 'https://capmonster.cloud/Dashboard'
    },
    {
      title: linkTwoTitle,
      Svg: require('@site/static/img/Ext_icon.svg').default,
      desciption: linkTwoDescription,
      image: isRULocale ? '/img/ru_extension.png' : '/img/en_extension.png',
      linkUrl: 'https://capmonster.cloud/#new-extension-block'
    },
    {
      title: linkThreeTitle,
      Svg: require('@site/static/img/Sup_icon.svg').default,
      desciption: linkThreeDescription,
      image: isRULocale ? '/img/ru_support.png' : '/img/en_support.png',
      linkUrl: 'https://helpdesk.zennolab.com/conversation/new'
    },
  ];

  return (
    <section className={styles.links}>
      <div className="container">
        <div className={styles.mainTitle}>{linksTitle}</div>

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
