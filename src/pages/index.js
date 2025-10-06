import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Libraries from '@site/src/components/Libraries';
import Links from '@site/src/components/Links';
import MainHero from '../components/MainHero';
import Prices from '../components/Prices';
import Head from '@docusaurus/Head';
import Footer from '../components/Footer';
import getLocaleStrings from '../locales/index';

export default function Home() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { metaTitle, metaDescription } = getLocaleStrings(currentLocale);

  const hideThemeToggle = () => {
    try {
      const toggle = document.querySelector('button.clean-btn:not(.navbar__toggle)');
      if (toggle && toggle.parentElement) {
        toggle.parentElement.style.display = 'none';
      }
    } catch (e) {}
  };

  const scrollToHash = () => {
    if (window.location.hash === '#price') {
      const priceElement = document.getElementById('price');
      if (priceElement) {
        priceElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    hideThemeToggle();
    scrollToHash();
  }, []);

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <main>
        <Head>
          <meta name="google-site-verification" content="LTaYcyNwaZKXhoWI-eqaxSJ1IX6zF3NJrjACTp41Tyg" />
          <meta name="algolia-site-verification" content="11F1E44583A33489" />
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription}></meta>
        </Head>
        <MainHero />
        <Libraries />
        <Links />
        <Prices />
        <Footer />
      </main>
    </Layout>
  );
}
