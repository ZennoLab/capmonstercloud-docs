import React from 'react';
import styles from './styles.module.css';

const ParamItem = ({ title, required, type, children, response }) => {
  return (
    <>
    <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }} className="paramItem">
      <code style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px', marginRight: '5px' }}>{title}</code>
      <span style={{ color: 'grey', fontSize: '14px', fontWeight: 500, marginRight: '5px' }}>{'<' + type + '>'}</span>
      {typeof required === 'string' && !response && <span className={styles.requiredItem}>{required}</span>}
      {typeof required === 'boolean' && !response &&  required && <span className={styles.requiredItem}>required</span>}
      {!required && !response && <span style={{ fontSize: '14px', color: 'grey', fontWeight: 500 }}>optional</span>}
    </div>
    {children && (<div style={{ paddingLeft: '24px', paddingTop: '10px' }}>
      {children}
    </div>)}
    </>
  );
};
export default ParamItem;