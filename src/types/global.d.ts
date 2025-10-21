declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '@docusaurus/useDocusaurusContext' {
  import type { DocusaurusContext } from '@docusaurus/types';
  function useDocusaurusContext(): DocusaurusContext;
  export default useDocusaurusContext;
}

declare module '@docusaurus/Head' {
  import type { ComponentType, PropsWithChildren } from 'react';
  const Head: ComponentType<PropsWithChildren<Record<string, unknown>>>;
  export default Head;
}
