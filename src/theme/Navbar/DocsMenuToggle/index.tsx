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

  const isMobile = windowSize === 'mobile';
  const isDocsPage = !!activeDocsPlugin;

  if (!isMobile || mobileSidebar.disabled || !isDocsPage) return null;

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

  return (
    <div className={styles.docsMenuBlock}>
      <button
        onClick={openDocsMenu}
        aria-label="Open docs menu"
        aria-expanded={isDocsMenuOpen}
        aria-pressed={isDocsMenuOpen}
        className="navbar__toggle clean-btn"
        type="button"
        title="Docs menu"
      >
        {/* simple ellipsis icon */}
        <DotsIcon />
      </button>
    </div>
  );
}
