import React from 'react';
import { useWindowSize } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';
import { useDocsMenuPreference } from '../docsMenuPreference';
import styles from './styles.module.css';
import DotsIcon from '@site/static/img/dots.svg';

export default function DocsMenuToggle() {
  const windowSize = useWindowSize();
  const mobileSidebar = useNavbarMobileSidebar();
  const activeDocsPlugin = useActivePlugin();
  const { preference, setPreference } = useDocsMenuPreference();
  const [pageTitle, setPageTitle] = React.useState('');

  const isMobile = windowSize === 'mobile';
  const isDocsPage = !!activeDocsPlugin;
  const shouldShow = isMobile && !mobileSidebar.disabled && isDocsPage;

  const openDocsMenu = () => {
    if (mobileSidebar.shown && preference === 'docs') {
      setPreference('primary');
      return;
    }

    setPreference('docs');
    if (!mobileSidebar.shown) {
      mobileSidebar.toggle();
    }
  };

  const isDocsMenuOpen = mobileSidebar.shown && preference === 'docs';

  React.useEffect(() => {
    if (!shouldShow) {
      setPageTitle('');
      return undefined;
    }

    const updateTitle = () => {
      const h1 = document.querySelector('main article h1, article h1');
      const titleFromH1 = h1?.textContent?.trim();
      if (titleFromH1) {
        setPageTitle(titleFromH1);
        return;
      }
      const rawTitle = document.title || '';
      const cleaned = rawTitle.replace(/\s*[|\-]\s*Capmonster Cloud Docs\s*$/i, '').trim();
      setPageTitle(cleaned);
    };

    updateTitle();

    const host = document.querySelector('main') || document.body;
    const observer = new MutationObserver(() => updateTitle());
    observer.observe(host, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [shouldShow]);

  if (!shouldShow) return null;

  return (
    <div className={styles.docsMenuBlock}>
      <button
        onClick={openDocsMenu}
        aria-label="Open docs menu"
        aria-expanded={isDocsMenuOpen}
        aria-pressed={isDocsMenuOpen}
        className="docs_navbar_toggle clean-btn"
        type="button"
        title="Docs menu"
      >
        {/* simple ellipsis icon */}
        <DotsIcon />
        {pageTitle && (
          <span className={styles.pageTitle} title={pageTitle}>
            {pageTitle}
          </span>
        )}
      </button>
    </div>
  );
}
