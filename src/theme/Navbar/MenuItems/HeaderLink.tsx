import Link from '@docusaurus/Link';
import React, { PropsWithChildren } from 'react';
import styles from './HeaderLink.module.css';

type HeaderLinkProps = PropsWithChildren<{
  href: string;
  dataGtmId?: string;
  className?: string;
  onClick?: () => void;
}>;

export const HeaderLink: React.FC<HeaderLinkProps> = ({ href, children, dataGtmId, className = '', onClick }) => {
  return (
    <Link href={href} data-gtm-id={dataGtmId} className={`${styles.headerLink} ${className}`} onClick={onClick}>
      <div className={styles.inner}>
        <span className={styles.text}>{children}</span>
      </div>
    </Link>
  );
};
