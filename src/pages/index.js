import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Libraries from '@site/src/components/Libraries';
import Links from '@site/src/components/Links'
import MainHero from '../components/MainHero';
import Prices from '../components/Prices';
import AnnounceBar from '../components/AnnounceBar';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
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
        <AnnounceBar />
        <MainHero />
        <Libraries />
        <Links />
        <Prices />
      </main>
    </Layout>
  );
}
