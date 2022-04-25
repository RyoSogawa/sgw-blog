import React from 'react'
import cn from 'classnames'
import s from './BgGradient.module.css'
import useScrollPosition from '../../../lib/hooks/useScrollPosition'
import useHoveringLink from '../../../lib/hooks/useHoveringLink'

export type BgGradientProps = {
  bgColorClassNames: string[]
}

const BgGradient: React.VFC<BgGradientProps> = ({ bgColorClassNames }) => {
  const { y } = useScrollPosition()
  const hoveringLink = useHoveringLink()

  return (
    <section className="overflow-hidden relative w-screen h-screen">
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
  )
}

export default BgGradient
