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
    // Check if running in Telegram Mini App
    if (window.Telegram?.WebApp) {
      const Telegram = window.Telegram.WebApp;

      // Initialize the Telegram Web App
      Telegram.ready();

      // Show the back button
      Telegram.BackButton.show();

      // Handle back button click
      const handleBackClick = () => {
        window.history.back();
      };

      Telegram.BackButton.onClick(handleBackClick);

      // Hide back button on first page (no history to go back to)
      const updateBackButtonVisibility = () => {
        if (window.history.length <= 1) {
          Telegram.BackButton.hide();
        } else {
          Telegram.BackButton.show();
        }
      };

      // Update visibility on page navigation
      window.addEventListener('popstate', updateBackButtonVisibility);
      updateBackButtonVisibility(); // Initial check

      // Cleanup on component unmount
      return () => {
        Telegram.BackButton.offClick(handleBackClick);
        window.removeEventListener('popstate', updateBackButtonVisibility);
        Telegram.BackButton.hide();
      };
    }
  }, []);

  return (
    <LayoutProvider>
      <script src="//code.tidio.co/zudj8rvfoimbts4749iizjx5hhztv8xg.js" async></script>

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
