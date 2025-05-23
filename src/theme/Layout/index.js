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
import { useUpdateHeaderLinks } from '../../utils/useUpdateHeaderLinks';
import styles from './styles.module.css';
import { waitForTelegram } from '../../utils/waitForTelegram';

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
  useUpdateHeaderLinks();

  useEffect(() => {
    const updateBackButtonVisibility = () => {
      if (window.history.length <= 1) {
        Telegram.BackButton.hide();
      } else {
        Telegram.BackButton.show();
      }
    };
    waitForTelegram().then((tg) => {
      const Telegram = tg.WebApp;

      Telegram.ready();
      Telegram.BackButton.show();

      const handleBackClick = () => {
        window.history.back();
      };

      Telegram.BackButton.onClick(handleBackClick);

      const updateBackButtonVisibility = () => {
        if (window.history.length <= 1) {
          Telegram.BackButton.hide();
        } else {
          Telegram.BackButton.show();
        }
      };

      window.addEventListener('popstate', updateBackButtonVisibility);
      updateBackButtonVisibility(); // Initial check
    }).catch((err) => console.error(err));
  
    return () => {
      if (window.Telegram?.WebApp) {
        window.Telegram?.WebApp.BackButton.offClick(handleBackClick);
        window.removeEventListener('popstate', updateBackButtonVisibility);
        window.Telegram?.WebApp.BackButton.hide();
      }
    };
  }, []);


  
  return (
    <LayoutProvider>
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
