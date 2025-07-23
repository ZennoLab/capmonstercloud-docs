declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '@docusaurus/useDocusaurusContext' {
  import type { DocusaurusContext } from '@docusaurus/types';
  function useDocusaurusContext(): DocusaurusContext;
  export default useDocusaurusContext;
}
