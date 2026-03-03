import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type ImagesLayoutProps = {
  columns?: number;
  gap?: number | string;
  className?: string;
  children: React.ReactNode;
};

const ImagesLayout = ({ columns = 2, gap = 22, className, children }: ImagesLayoutProps) => {
  const normalizedColumns = Number.isFinite(columns) && columns > 0 ? Math.floor(columns) : 1;
  const normalizedGap = typeof gap === 'number' ? `${gap}px` : gap;

  return (
    <div
      className={clsx(styles.container, className)}
      style={
        {
          '--images-layout-columns': normalizedColumns,
          '--images-layout-gap': normalizedGap,
        } as React.CSSProperties
      }
    >
      {React.Children.toArray(children)}
    </div>
  );
};

export default ImagesLayout;
