import React from 'react'
import cn from 'classnames'
import s from './BgGradient.module.css'

export type BgGradientProps = {
  bgColorClassNames: string[]
}

const BgGradient: React.VFC<BgGradientProps> = ({ bgColorClassNames }) => {
  return (
    <section className="overflow-hidden relative w-screen h-screen">
      <div className={s.gradientWrapper} role="region">
        {bgColorClassNames.map((c, index) => (
          <div key={c + index} className={cn(s.gradient, c)} />
        ))}
      </div>
    </section>
  )
}

export default BgGradient
