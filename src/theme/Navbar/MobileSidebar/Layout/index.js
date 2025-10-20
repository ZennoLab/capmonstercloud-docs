import React from 'react';
import clsx from 'clsx';
import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import BadTokenBlock from '../../../BadTokenBlock';
import { useDocsMenuPreference } from '../../docsMenuPreference';

export default function NavbarMobileSidebarLayout({ header, primaryMenu, secondaryMenu }) {
  const { shown: defaultSecondaryShown, content } = useNavbarSecondaryMenu();
  const { preference } = useDocsMenuPreference();

  const hasSecondaryContent = Boolean(content);
  const shouldShowSecondary =
    hasSecondaryContent &&
    (preference === 'docs' || (preference !== 'primary' && defaultSecondaryShown));

  return (
    <div className="navbar-sidebar">
      {header}
      <div
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': shouldShowSecondary,
        })}
      >
        <div className="navbar-sidebar__item menu">{primaryMenu}</div>
        <div className="navbar-sidebar__item menu">{secondaryMenu}</div>
      </div>
      <BadTokenBlock />
    </div>
  );
}
