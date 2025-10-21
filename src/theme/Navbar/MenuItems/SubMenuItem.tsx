import Link from '@docusaurus/Link';
import React, { FC } from 'react';
import styles from './SubMenuItem.module.css';

type Props = {
  icon?: React.JSX.Element;
  title: string;
  href: string;
  gtmId?: string;
  handleClick?: () => void;
};

const SubMenuItem: FC<Props> = ({ icon, title, href, gtmId, handleClick }) => {
  return (
    <Link data-gtm-id={gtmId} href={href} className={styles.subMenuItem} onClick={handleClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.title}>{title}</span>
    </Link>
  );
};

export default SubMenuItem;
