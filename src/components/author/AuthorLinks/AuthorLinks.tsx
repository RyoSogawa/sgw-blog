import React from 'react';

import cn from 'classnames';

import { LINKS } from '../../../lib/constants';

const links = [
  {
    name: 'Github',
    href: LINKS.github,
    src: '/images/svg/github.svg',
  },
  {
    name: 'Twitter',
    href: LINKS.twitter,
    src: '/images/svg/twitter.svg',
  },
  {
    name: 'RSS',
    href: LINKS.rss,
    src: '/images/svg/rss.svg',
  },
];

export type AuthorLinksProps = {
  className?: string;
};

const AuthorLinks: React.VFC<AuthorLinksProps> = ({ className }) => (
  <div className={cn(className, 'inline-grid grid-flow-col gap-5')}>
    {links.map((link) => (
      <a
        key={link.name}
        className="h-6 w-6"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-full w-full"
          src={link.src}
          alt={link.name}
          width={24}
          height={24}
          loading="lazy"
        />
      </a>
    ))}
  </div>
);

export default AuthorLinks;
