import React from 'react';
import { useWindowSize } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';

export default function DocsMenuToggle() {
  const windowSize = useWindowSize();
  const mobileSidebar = useNavbarMobileSidebar();
  const activeDocsPlugin = useActivePlugin();

  const isMobile = windowSize === 'mobile';
  const isDocsPage = !!activeDocsPlugin;

  if (!isMobile || !isDocsPage) return null;

  return (
    <button
      onClick={mobileSidebar.toggle}
      aria-label="Open docs menu"
      aria-expanded={mobileSidebar.shown}
      className="navbar__toggle clean-btn"
      type="button"
      title="Docs menu"
    >
      {/* simple ellipsis icon */}
      <span style={{ fontSize: 22, lineHeight: 1, transform: 'translateY(-1px)' }}>⋯</span>
    </button>
  );
}
