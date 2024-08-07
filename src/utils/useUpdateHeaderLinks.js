import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const UPDATE_LINK = 'https://brocapgpt.com';

export function useUpdateHeaderLinks() {
  const { i18n } = useDocusaurusContext();
  
  useEffect(() => {
    const elements = document.querySelectorAll('a.navbar__item');
    for (const element of Array.from(elements)) {
      const currentHref = element.getAttribute('href')
      if (currentHref === UPDATE_LINK) {
        element.setAttribute('href', currentHref + `/${i18n.currentLocale}`);
      }
    }
    
  }, []);
}