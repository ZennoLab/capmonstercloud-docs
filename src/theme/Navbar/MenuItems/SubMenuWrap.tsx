import React, { PropsWithChildren } from 'react';
import styles from './SubMenuWrap.module.css';

type SubMenuWrapProps = {
  isMobile?: boolean;
  isVisible?: boolean;
  isTwoColumn?: boolean;
} & PropsWithChildren;

const SubMenuWrap = ({ children, isMobile, isVisible, isTwoColumn }: SubMenuWrapProps) => {
  const classNames = [
    styles.subMenuWrap,
    isMobile ? styles.mobile : styles.desktop,
    isVisible ? styles.visible : styles.hidden,
    isTwoColumn ? styles.twoColumn : styles.singleColumn,
  ].join(' ');

  return <div className={classNames}>{children}</div>;
};

export default SubMenuWrap;
