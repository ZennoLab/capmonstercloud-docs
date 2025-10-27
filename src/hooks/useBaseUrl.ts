import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const useBaseUrl = () => {
  const { siteConfig } = useDocusaurusContext();
  const isDev = siteConfig.customFields?.APP_ENV === 'DEV';
  const baseLandingUrl = isDev ? 'https://blogui.dev.cmc.k8s.zenno.services' : 'https://capmonster.cloud';
  const baseDashboardUrl = isDev ? 'https://cmadmin.dev.k8s.zenno.services' : 'https://dash.capmonster.cloud';

  return { baseLandingUrl, baseDashboardUrl };
};
