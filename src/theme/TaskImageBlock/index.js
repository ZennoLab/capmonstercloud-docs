import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const TaskImageBlock = ({ children, link }) => {
  return (
    link ? <Link href={link} className={styles.link}>
      <div className={styles.wrap}>
        { children }
      </div>
    </Link> : <div className={styles.wrap}>
      { children }
    </div>
  );
};

export default TaskImageBlock;