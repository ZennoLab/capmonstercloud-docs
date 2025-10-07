import React, { PropsWithChildren } from 'react';
import styles from './SubMenuWrap.module.css';

type SubMenuWrapProps = {
  isVisible?: boolean;
  isTwoColumn?: boolean;
} & PropsWithChildren;

const SubMenuWrap = ({ children, isVisible, isTwoColumn }: SubMenuWrapProps) => {
  const classNames = [
    styles.subMenuWrap,
    isVisible ? styles.visible : styles.hidden,
    isTwoColumn ? styles.twoColumn : styles.singleColumn,
    styles.desktop,
  ].join(' ');

  return <div className={classNames}>{children}</div>;
};

export default SubMenuWrap;
