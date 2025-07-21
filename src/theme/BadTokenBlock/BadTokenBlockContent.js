import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import CloseIcon from './CloseIcon';
import SupportIcon from './SupportIcon';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import getLocaleStrings from '../../locales/index';

const BadTokenBlockContent = ({}) => {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;
  const { tokenProblems, callSupport } = getLocaleStrings(currentLocale);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const isHidden = sessionStorage.getItem('isHidden');
    setIsShow(!isHidden);
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('isHidden', 'true');
    setIsShow(false);
  };

  return (
    <div className={`${styles.wrapperMain} ${isShow ? '' : styles.hiddenBlock} `}>
      <span className={styles.supportIconWrap}>
        <SupportIcon />
      </span>
      <span className={styles.mainText}>
        {tokenProblems}
        <br />
        <a href="https://helpdesk.zennolab.com/conversation/new" target="_blank">
          {' '}
          {callSupport}
        </a>
      </span>
      <span className={styles.closeIconWrap} onClick={handleClose}>
        <CloseIcon />
      </span>
    </div>
  );
};

export default BadTokenBlockContent;
