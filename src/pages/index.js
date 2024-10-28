import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Libraries from '@site/src/components/Libraries';
import Links from '@site/src/components/Links'
import MainHero from '../components/MainHero';
import Prices from '../components/Prices';
import Head from '@docusaurus/Head';
import Footer from '../components/Footer';
import getLocaleStrings from '../locales/index';

export default function Home() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { metaTitle, metaDescription } = getLocaleStrings(currentLocale);

  const hideThemeToggle = () => {
    const toggle = document.querySelector('button.clean-btn:not(.navbar__toggle)');
    toggle.parentElement.style.display = 'none';
  }

  const scrollToHash = () => {
    if (window.location.hash === '#price') {
      const priceElement = document.getElementById('price');
      if (priceElement) {
        priceElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  useEffect(() => {
    hideThemeToggle();
    scrollToHash();
  })

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Head>
        <meta name="google-site-verification" content="LTaYcyNwaZKXhoWI-eqaxSJ1IX6zF3NJrjACTp41Tyg" />
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
