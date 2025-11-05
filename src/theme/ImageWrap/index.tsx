import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

type ImageWrapProps = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

const ImageWrap = ({ children, title, className }: ImageWrapProps) => {
  return (
    <div className={styles.wrap}>
      <div className={clsx(styles.container, className, { [styles.imgWithTitle]: Boolean(title) })}>{children}</div>
      {title && <div className={styles.title}>{title}</div>}
    </div>
  );
};

export default ImageWrap;
