import React from 'react';

import cn from 'classnames';
import Link from 'next/link';

export type ButtonLinkProps = {
  href: string;
  className?: string;
  theme?: 'primary' | 'secondary';
  shadow?: boolean;
  children?: React.ReactNode;
};

const ButtonLink: React.VFC<ButtonLinkProps> = ({
  href,
  children,
  theme = 'primary',
  shadow,
  className,
}) => {
  const isExternal = href.startsWith('http');
  const classNames = cn(
    className,
    'inline-block min-w-[170px] rounded border py-2 px-6 text-center font-inter font-medium fsz-16ptr',
    'transition-colors duration-200',
    theme === 'primary' &&
      'border-blue-500 bg-blue-500 text-white hover:border-blue-600 hover:bg-blue-600',
    theme === 'secondary' &&
      'border-white bg-white text-black hover:bg-transparent hover:text-white',
    shadow && 'shadow',
    shadow && theme === 'primary' && 'shadow-blue-500',
  );

  if (isExternal) {
    return (
      <a href={href} className={classNames} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={classNames}>{children}</a>
    </Link>
  );
};

export default ButtonLink;
