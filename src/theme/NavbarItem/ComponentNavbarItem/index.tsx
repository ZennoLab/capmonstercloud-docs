import React from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
  mobile?: boolean;
  onClick?: () => void;
  // Either provide a render function or a component
  render?: (extra?: { onClick?: () => void }) => React.ReactNode;
  component?: (props?: any) => React.ReactNode;
};

export default function ComponentNavbarItem({
  className,
  mobile,
  onClick,
  render,
  component: Component,
}: Props) {
  if (mobile) {
    return (
      <li className="menu__list-item">
        {render ? render({ onClick }) : Component ? <Component onClick={onClick} /> : null}
      </li>
    );
  }

  return (
    <div className={clsx('navbar__item', className)}>
      {render ? render({ onClick }) : Component ? <Component onClick={onClick} /> : null}
    </div>
  );
}
