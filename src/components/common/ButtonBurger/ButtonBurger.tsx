import React from 'react'
import cn from 'classnames'

const lineClass =
  'absolute top-1/2 left-1/2 w-10 h-px bg-lavender -translate-x-1/2 transition-transform'

export type ButtonBurgerProps = {
  isOpen: boolean
  onClick: () => void
}

const ButtonBurger: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonBurgerProps
> = ({ isOpen, onClick }, ref) => {
  return (
    <button
      ref={ref}
      aria-label={isOpen ? 'close menu' : 'open menu'}
      type={'button'}
      className="relative z-banner w-12 h-12 rounded-full"
      onClick={onClick}
    >
      <span
        className={cn(
          lineClass,
          isOpen ? 'rotate-[36deg] translate-y-0' : '-translate-y-1.5'
        )}
      />
      <span
        className={cn(
          lineClass,
          isOpen ? 'rotate-[-36deg] translate-y-0' : 'translate-y-1.5'
        )}
      />
    </button>
  )
}

export default React.forwardRef<HTMLButtonElement, ButtonBurgerProps>(
  ButtonBurger
)
