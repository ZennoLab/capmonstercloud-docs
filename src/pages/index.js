import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Libraries from '@site/src/components/Libraries';
import Links from '@site/src/components/Links'
import MainHero from '../components/MainHero';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      
      <main>
        <MainHero />
        <Libraries />
        <Links />
      </main>
    </Layout>
  );
}
