import React from 'react';
import styles from './styles.module.css'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings from '../../locales/index';

const TaskImageText = ({ price, title }) => {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { complexImageAnswers } = getLocaleStrings(currentLocale);

  return (
    <div>
      {title && <div className={`${styles.title} taskImageTitle`}>{title}</div>}
      {price && <div className={styles.mainText}>
        ${price}<span className={styles.subText}> / {complexImageAnswers}</span>
      </div>}
    </div>
    
  );
};

export default TaskImageText;