import React from 'react';
import MainSiteBanner from './MainSiteBanner';
import styles from './styles.module.css';

export default function Banners() {
  const [topOffset, setTopOffset] = React.useState(0);

  const calculateOffset = () => {
    const toc = document.querySelector('[class^="tableOfContents_"]');
    const tocStyle = toc ? getComputedStyle(toc) : { top: '0' };
    const stickyTopPx = parseFloat(tocStyle.top) || 0;
    const height = (toc as HTMLElement)?.offsetHeight;
    const feedbackHeight = 56 + 24; // 56 - height + 24 marginTop
    setTopOffset(height + stickyTopPx + feedbackHeight + 16); //16 - marginTop
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      calculateOffset();
    }
  }, []);

  return (
    <div className={styles.wrapper} style={{ top: topOffset }}>
      <MainSiteBanner />
    </div>
  );
}
