import { useLocation } from '@docusaurus/router';
import { useEffect } from 'react';

export function useReplaceUserAgent(): void {
  const location = useLocation();
  useEffect(() => {
    async function updateUserAgent() {
      try {
        const response = await fetch('https://data-docs.capmonster.cloud/', {
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: { UserAgent?: string } = await response.json();
        const userAgent = data?.UserAgent || '';

        const elements = document.querySelectorAll('*:not(script):not(style)');

        elements.forEach(el => {
          el.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue) {
              node.nodeValue = node.nodeValue.replace(/userAgentPlaceholder/gi, userAgent);
            }
          });
        });
      } catch (error) {
        console.error('Error fetching user agent:', error);
      }
    }

    updateUserAgent();
  }, [location.pathname]);
}
