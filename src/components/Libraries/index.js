import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


const LibrariesList = [
  {
    title: 'C#',
    Svg: require('@site/static/img/C#.svg').default,
    githubLink: 'https://zenno.link/cmcloud-github',
    customLinkName: 'Nuget',
    customLinkUrl: 'https://zenno.link/cmcloud-nuget'
  },
  {
    title: 'Python',
    Svg: require('@site/static/img/Python.svg').default,
    githubLink: 'https://zenno.link/cmcloud-github-py',
    customLinkName: 'PyPl',
    customLinkUrl: 'https://zenno.link/cmcloud-pypi-py'
  },
  {
    title: 'JavaScript',
    Svg: require('@site/static/img/Js.svg').default,
    githubLink: 'https://zenno.link/cmcloud-github-js',
    customLinkName: 'Npm',
    customLinkUrl: 'https://zenno.link/cmcloud-npm-js'
  },
  {
    title: 'Go',
    Svg: require('@site/static/img/Go.svg').default,
    githubLink: 'https://zenno.link/cmcloud-github-go',
    customLinkName: 'Pkg.go.dev',
    customLinkUrl: 'https://zenno.link/cmcloud-pkggodev-go'
  },
  {
    title: 'PHP',
    Svg: require('@site/static/img/Php.svg').default,
    githubLink: 'https://github.com/ZennoLab/capmonstercloud-client-php',
    customLinkName: 'Packagist',
    customLinkUrl: 'https://packagist.org/packages/zennolab/capmonstercloud.client'
  },
];


function Library({title, Svg, githubLink, customLinkName, customLinkUrl }) {
  return (
    <div className={styles.libBlock}>
      <div className={styles.titleBlock}>
        <Svg className={styles.libSvg} role="img" />
        <h3 className={styles.libTitle}>{title}</h3>
      </div>
      <div className={styles.libBtns}>
        <a className={styles.libBtn} href={customLinkUrl}>{customLinkName}</a>
        <a className={styles.libBtn} href={githubLink}>Github</a>
      </div>
    </div>
  );
}

export default function Libraries() {
  const { i18n } = useDocusaurusContext();
  const titleRu = 'Библиотеки для разработчиков';
  const titleEn = 'Libraries for developers';
  const title = i18n.currentLocale === 'ru' ? titleRu : titleEn;
  const descriptionRu = 'Для вашего удобства мы создали готовые библиотеки для быстрой интеграции API CapMonster Cloud в свой код'
  const desciptionEn = 'For your convenience, we\'ve created ready-made libraries for quick integrating the CapMonster Cloud API into your code';
  const desciption = i18n.currentLocale === 'ru' ? descriptionRu : desciptionEn;
  return (
    <section className={styles.libraries}>
      <div className="container">
        <div className={styles.mainTitle}>{title}</div>
        <div className={styles.subTitle}>{desciption}</div>
        <div className={styles.libsBlock}>
          {LibrariesList.map(lib => (
            <Library title={lib.title}
              Svg={lib.Svg}
              githubLink={lib.githubLink}
              customLinkName={lib.customLinkName}
              customLinkUrl={lib.customLinkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
