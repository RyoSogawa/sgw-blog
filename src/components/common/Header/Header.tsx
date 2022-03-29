import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MENU } from '../../../lib/constants'
import AuthorLinks from '../../author/AuthorLinks/AuthorLinks'
import MobileMenu from '../MobileMenu/MobileMenu'
import ButtonBurger from '../ButtonBurger/ButtonBurger'

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
    <motion.header
      className={
        'fixed top-0 left-0 z-sticky w-full bg-richBlack/95 backdrop-blur-[10px] backdrop-saturate-[180%]'
      }
      initial={false}
      animate={isMenuOpened ? 'open' : 'closed'}
    >
      <div className="container flex items-center h-[70px] lg:h-[80px]">
        <Link href={'/'}>
          <a className={'font-inter font-bold text-white fsz-28ptr'}>
            Ryo Sogawa
          </a>
        </Link>
        <div className="grow" />
        <ButtonBurger isOpen={isMenuOpened} onClick={handleBurgerClick} />
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
      <MobileMenu />
    </motion.header>
  )
}

export default Header
