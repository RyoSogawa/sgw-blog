import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { MENU } from '../../../lib/constants'
import AuthorLinks from '../../author/AuthorLinks/AuthorLinks'

const burgerBorderClass =
  'absolute top-1/2 left-0 w-full h-px bg-lavender transition-transform'

const headerMenus = [
  ...MENU,
  {
    label: 'Contact',
    path: '/contact',
  },
]

const Header: React.VFC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const handleBurgerClick = useCallback(() => {
    setIsMenuOpened(prev => !prev)
  }, [])

  return (
    <header
      className={
        'fixed top-0 left-0 z-sticky w-full bg-richBlack/95 backdrop-blur-[10px] backdrop-saturate-[180%]'
      }
    >
      <div className="container flex items-center h-[70px] lg:h-[80px]">
        <Link href={'/'}>
          <a className={'font-inter font-bold text-white fsz-28ptr'}>
            Ryo Sogawa
          </a>
        </Link>
        <div className="grow" />
        <button
          aria-label={isMenuOpened ? 'close menu' : 'open menu'}
          type={'button'}
          className="relative z-banner w-12 h-12 lg:hidden"
          onClick={handleBurgerClick}
        >
          <span
            className={cn(
              burgerBorderClass,
              isMenuOpened ? 'rotate-[36deg] translate-y-0' : '-translate-y-1.5'
            )}
          />
          <span
            className={cn(
              burgerBorderClass,
              isMenuOpened ? 'rotate-[-36deg] translate-y-0' : 'translate-y-1.5'
            )}
          />
        </button>
        <nav className="hidden lg:flex lg:items-center">
          <ul className={'grid grid-flow-col gap-8 mr-8'}>
            {headerMenus.map(menu => (
              <li key={menu.label}>
                <Link href={menu.path}>
                  <a
                    className={
                      'font-inter font-extralight text-white fsz-16ptr'
                    }
                  >
                    {menu.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <AuthorLinks />
        </nav>
      </div>
    </header>
  )
}

export default Header
