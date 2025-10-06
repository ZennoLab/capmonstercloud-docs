import React, { useState } from 'react';
import SubMenuWrap from './SubMenuWrap';
import { HeaderMenuSubItem } from './types';
import SubMenuItem from './SubMenuItem';
import ArrowIcon from '@site/static/img/arrow.svg';
import styles from './SubMenu.module.css';

type SubMenuProps = {
  link: HeaderMenuSubItem;
  isMobile?: boolean;
  handleClick?: () => void;
};

const SubMenu = ({ link, isMobile, handleClick }: SubMenuProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickToggle = () => {
    if (isMobile) setIsVisible(prev => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isMobile && e.key === 'Enter') setIsVisible(prev => !prev);
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsVisible(false);
  };

  return (
    <div
      className={`${styles.subMenu} ${isMobile ? styles.mobileBorder : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        tabIndex={0}
        onClick={handleClickToggle}
        onKeyDown={handleKeyDown}
        className={`${styles.button} ${isMobile ? styles.mobileButton : styles.desktopButton}`}
      >
        {link.title}
        <ArrowIcon className={styles.arrow} />
      </button>

      <SubMenuWrap isMobile={isMobile} isVisible={isVisible} isTwoColumn={link.isTwoColumn}>
        {link.subItems.map(subLink => (
          <SubMenuItem
            key={subLink.gtmId}
            icon={subLink.icon}
            title={subLink.title}
            href={subLink.url}
            gtmId={subLink.gtmId}
            handleClick={handleClick}
          />
        ))}
      </SubMenuWrap>
    </div>
  );
};

export default SubMenu;
