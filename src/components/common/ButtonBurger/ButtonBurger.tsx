import React from 'react'
import s from './ButtonBurger.module.css'

export type ButtonBurgerProps = {
  isOpen: boolean
  onClick: () => void
}

const ButtonBurger: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonBurgerProps
> = ({ isOpen, onClick }, ref) => (
  <button
    ref={ref}
    aria-label={isOpen ? 'close menu' : 'open menu'}
    type="button"
    data-open={isOpen}
    className={s.button}
    onClick={onClick}
  >
    <span className={s.cross} />
    <span className={s.cross} />
    <span className={s.lineBlock} />
  </button>
)

export default React.forwardRef<HTMLButtonElement, ButtonBurgerProps>(
  ButtonBurger
)
