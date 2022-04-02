import React, { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MobileMenu from '../MobileMenu/MobileMenu'
import ButtonBurger from '../ButtonBurger/ButtonBurger'

const Header: React.VFC = () => {
  const burgerRef = useRef<HTMLButtonElement>(null)
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const handleBurgerClick = useCallback(() => {
    setIsMenuOpened(prev => !prev)
  }, [])

  const handleModalClose = useCallback(() => {
    // fire event after burger clicked
    setTimeout(() => {
      setIsMenuOpened(false)
    }, 300)
  }, [])

  return (
    <motion.header
      className={'fixed top-0 left-0 z-sticky w-full'}
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
        <ButtonBurger
          ref={burgerRef}
          isOpen={isMenuOpened}
          onClick={handleBurgerClick}
        />
      </div>
      <MobileMenu
        burgerRef={burgerRef}
        isOpen={isMenuOpened}
        onClose={handleModalClose}
      />
    </motion.header>
  )
}

export default Header
