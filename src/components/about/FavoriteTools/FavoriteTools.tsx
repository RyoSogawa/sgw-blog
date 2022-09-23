import React from 'react';

import cn from 'classnames';

import Heading from '../../ui/Heading';

export type FavoriteToolsProps = {
  className?: string;
};

const data = [
  {
    name: 'React',
    imgFileName: 'react.svg',
  },
  {
    name: 'GraphQL',
    imgFileName: 'graphql.svg',
  },
  {
    name: 'TypeScript',
    imgFileName: 'typescript.svg',
    imgClassName: 'bg-white',
  },
  {
    name: 'Storybook',
    imgFileName: 'storybook.svg',
    width: 320,
    height: 399,
  },
  {
    name: 'JetBrains',
    imgFileName: 'jetbrains.svg',
    imgClassName: 'bg-white',
  },
  {
    name: 'Figma',
    imgFileName: 'figma.svg',
    width: 288,
    height: 480,
  },
  {
    name: 'Googleスプレッドシート',
    imgFileName: 'spread-sheet.svg',
  },
  {
    name: 'Slack',
    imgFileName: 'slack.svg',
  },
];

const FavoriteTools: React.VFC<FavoriteToolsProps> = ({ className }) => (
  <section className={cn(className, 'section')}>
    <div className="container">
      <Heading as="h2" id="favorite-tools">
        Favorite Tools
      </Heading>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-x-2 gap-y-8 mx-auto mt-10 max-w-[710px]">
        {data.map((d) => (
          <li key={d.name} className="text-center">
            <img
              src={`/images/favorite/${d.imgFileName}`}
              alt=""
              width={d.width || '48'}
              height={d.height || '48'}
              loading="lazy"
              className={cn('inline-block h-12', d.imgClassName)}
            />
            <span className="block mt-4 font-mono fsz-14ptr">{d.name}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default FavoriteTools;
