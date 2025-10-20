export type HeaderMenuSingleItem = {
  title: string;
  url: string;
  icon?: React.JSX.Element;
  gtmId?: string;
};

export type HeaderMenuSubItem = {
  title: string;
  isTwoColumn?: boolean;
  isSolutionItem?: boolean;
  subItems: HeaderMenuSingleItem[];
};

export type HeaderMenuItem = HeaderMenuSingleItem | HeaderMenuSubItem;
