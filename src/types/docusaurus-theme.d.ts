declare module '@theme/*' {
  const value: any;
  export default value;
}

declare module '@theme/NavbarItem' {
  import type { ComponentProps, ReactNode } from 'react';

  export type DefaultNavbarItemProps = {
    label: string;
    href: string;
    position?: 'left' | 'right';
    className?: string;
    [key: string]: any;
  };

  export type Props = ComponentProps<'a'> & {
    readonly position?: 'left' | 'right';
  } & (
      | ({ readonly type?: 'default' } & DefaultNavbarItemProps)
      | { readonly type: 'docSidebar'; sidebarId: string; label: string }
      | { readonly type: 'dropdown'; label: string; items: DefaultNavbarItemProps[] }
      | { readonly type: 'html'; value: string }
      | {
          readonly type: 'component';
          readonly className?: string;
          readonly component?: (props?: any) => ReactNode;
          readonly render?: (extra?: { onClick?: () => void }) => ReactNode;
        }
    );

  const NavbarItem: (props: Props) => ReactNode;
  export default NavbarItem;
}

declare module '@theme-original/*' {
  const value: any;
  export default value;
}

declare module '@theme-init/*' {
  const value: any;
  export default value;
}
