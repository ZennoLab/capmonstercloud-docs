import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Libraries from '@site/src/components/Libraries';
import Links from '@site/src/components/Links'
import MainHero from '../components/MainHero';
import Prices from '../components/Prices';
import AnnounceBar from '../components/AnnounceBar';
import Head from '@docusaurus/Head';
import Footer from '../components/Footer';

export default function Home() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const titleRu = 'Документация для обхода капчи | CapMonster Cloud ';
  const titleEn = 'CapMonster Cloud Docs | How to Bypass Any Type of Captcha '
  const title = i18n.currentLocale === 'ru' ? titleRu : titleEn;

  const descriptionRu = 'Как обходить  reCAPTCHA, hCaptcha и другие типы капчи при помощи CapMonster Cloud.';
  const descriptionEn = 'How to  bypass  reCAPTCHA, hCaptcha and other types of captcha by CapMonster Cloud.'
  const description = i18n.currentLocale === 'ru' ? descriptionRu : descriptionEn;


  const hideThemeToggle = () => {
    const toggle = document.querySelector('button.clean-btn:not(.navbar__toggle)');
    toggle.parentElement.style.display = 'none';
  }
  useEffect(() => {
    hideThemeToggle();
  })
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Head>
        <meta name="google-site-verification" content="LTaYcyNwaZKXhoWI-eqaxSJ1IX6zF3NJrjACTp41Tyg" />
          <title>{title}</title>
          <meta name="description" content={description}></meta>
        </Head>
        <MainHero />
        <Libraries />
        <Prices />
        <Links />
        <Footer />
      </main>
    </Layout>
  );
}
