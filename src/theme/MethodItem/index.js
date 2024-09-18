import React from 'react';
import styles from './styles.module.css';

const MethodItem = ({ type = 'POST', children }) => {
  return (
    <div className={`${styles.wrap} method-item`}>
      
      {children && (<div className={styles.childrenWrap}>
        <div className={styles.method}>{type}</div>
        {children}
      </div>)}
    </div>
  );
};
export default MethodItem;