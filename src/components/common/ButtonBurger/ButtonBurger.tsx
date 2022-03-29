import React from 'react'
import cn from 'classnames'

const lineClass =
  'absolute top-1/2 left-0 w-full h-px bg-lavender transition-transform'

export type ButtonBurgerProps = {
  isOpen: boolean
  onClick: () => void
}

const ButtonBurger: React.VFC<ButtonBurgerProps> = ({ isOpen, onClick }) => {
  return (
    <button
      aria-label={isOpen ? 'close menu' : 'open menu'}
      type={'button'}
      className="relative z-banner w-12 h-12 lg:hidden"
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

export default ButtonBurger
