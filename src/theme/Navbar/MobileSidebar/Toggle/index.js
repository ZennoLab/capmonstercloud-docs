import React from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import IconMenu from '@theme/Icon/Menu';
import {useDocsMenuPreference} from '../../docsMenuPreference';
export default function MobileSidebarToggle() {
  const {toggle, shown} = useNavbarMobileSidebar();
  const {setPreference} = useDocsMenuPreference();
  const handleClick = () => {
    if (!shown) {
      setPreference('primary');
    }
    toggle();
  };
  return (
    <button
      onClick={handleClick}
      aria-label={translate({
        id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
        message: 'Toggle navigation bar',
        description:
          'The ARIA label for hamburger menu button of mobile navigation',
      })}
      aria-expanded={shown}
      className="navbar__toggle clean-btn"
      type="button">
      <IconMenu />
    </button>
  );
}
