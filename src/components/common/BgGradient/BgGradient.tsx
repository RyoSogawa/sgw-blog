import React from 'react';

import cn from 'classnames';

import useHoveringLink from '../../../hooks/useHoveringLink';
import useScrollPosition from '../../../hooks/useScrollPosition';
import s from './BgGradient.module.css';

export type BgGradientProps = {
  bgColorClassNames: string[];
};

const BgGradient: React.VFC<BgGradientProps> = ({ bgColorClassNames }) => {
  const { y } = useScrollPosition();
  const hoveringLink = useHoveringLink();

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <div className={s.gradientWrapper} role="region">
        {bgColorClassNames.map((c, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={c + index}
            className={cn(s.gradient, c)}
            data-on-fv={y < 300}
            data-hovering-link={hoveringLink}
          />
        ))}
      </div>
    </section>
  );
};

export default BgGradient;
