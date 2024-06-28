import React, { useEffect } from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {useKeyboardNavigation} from '@docusaurus/theme-common/internal';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import ErrorPageContent from '@theme/ErrorPageContent';
import styles from './styles.module.css';
export default function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;
  useKeyboardNavigation();

  const getUserAgent = async () => {
    const url = 'https://data-docs.capmonster.cloud/';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
  }

  const updateUserAgent = async () => {
    const userAgent = await getUserAgent();
    const elements = document.querySelectorAll('*:not(script):not(style)'); // исключаем скрипты и стили

    elements.forEach(element => {
      if (element.childNodes.length) {
        element.childNodes.forEach(node => {
          if (node.nodeType === 3) { // Текстовый узел
            const regex = new RegExp(`(userAgentPlaceholder)`, 'gi');
            const newText = node.nodeValue.replace(regex, userAgent?.UserAgent);
            if (newText !== node.nodeValue) {
              node.nodeValue = newText;
            }
          }
        });
      }
    });
  };

  useEffect(() => {
    updateUserAgent()
  })

  return (
    <LayoutProvider>
      <script defer dangerouslySetInnerHTML={{__html:`(function(d,a){function c(){var b=d.createElement("script");b.async=!0;b.type="text/javascript";b.src=a._settings.messengerUrl;b.crossOrigin="anonymous";var c=d.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}window.kayako=a;a.readyQueue=[];a.newEmbedCode=!0;a.ready=function(b){a.readyQueue.push(b)};a._settings={apiUrl:"https://zennolab.kayako.com/api/v1",messengerUrl:"https://zennolab.kayakocdn.com/messenger",realtimeUrl:"wss://kre.kayako.net/socket"};window.attachEvent?window.attachEvent("onload",c):window.addEventListener("load",c,!1)})(document,window.kayako||{});`}}></script>

      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <AnnouncementBar />

      <Navbar />

      <div
        id={SkipToContentFallbackId}
        className={clsx(
          ThemeClassNames.wrapper.main,
          styles.mainWrapper,
          wrapperClassName,
        )}>
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          {children}
        </ErrorBoundary>
      </div>

      {!noFooter && <Footer />}
    </LayoutProvider>
  );
}
