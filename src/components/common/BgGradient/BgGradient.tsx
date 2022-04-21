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
        {bgColorClassNames.map(c => (
          <div
            key={c + new Date().getTime()}
            className={cn(s.gradient, c)}
            style={{ opacity: y < 300 || hoveringLink ? 0.8 : 0.3 }}
          />
        ))}
      </div>
    </section>
  )
}

export default BgGradient
