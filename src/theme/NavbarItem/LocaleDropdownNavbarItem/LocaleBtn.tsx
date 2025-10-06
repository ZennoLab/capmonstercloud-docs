import React, { useRef } from 'react';
import ChangeLocaleIcon from '@site/static/img/changeLocale.svg'; // или обычный <img /> если без docusaurus image plugin
import styles from './LocaleBtn.module.css';

type LocaleDropdownProps = {
  isShow: boolean;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  handleOpen: () => void;
  currentLocale: string;
  currentLocales: Record<string, { title: string }>;
  ChangeLocaleIcon: { src: string };
};

const LocaleBtn = ({ isShow }: LocaleDropdownProps) => {
  return (
    <div className={`${styles.wrapper} ${isShow ? styles.focused : styles.outlined}`} tabIndex={0}>
      <div className={styles.button}>
        <span className={styles.buttonInner}>
          <ChangeLocaleIcon width={20} height={20} />
          {/* <span className={styles.localeTitle}>{currentLocales[currentLocale]?.title}</span> */}
        </span>
      </div>
    </div>
  );
};

export default LocaleBtn;
