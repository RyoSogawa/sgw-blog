import React from 'react'
import { motion, Variants } from 'framer-motion'
import { MENU } from '../../../lib/constants'
import Link from 'next/link'
import ButtonLink from '../../ui/ButtonLink/ButtonLink'
import AuthorLinks from '../../author/AuthorLinks/AuthorLinks'

const modal: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 58px) 36px)`,
    backgroundColor: '#000',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at calc(100% - 58px) 36px)',
    backgroundColor: '#0C1821',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const modalMenus: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const modalMenuItems: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export type MobileMenuProps = {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.VFC = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-screen h-screen text-center bg-black lg:hidden"
      variants={modal}
    >
      <nav className="mt-24">
        <motion.ul
          className={'grid grid-flow-row gap-5 justify-center'}
          variants={modalMenus}
        >
          {MENU.map(menu => (
            <motion.li key={menu.label} variants={modalMenuItems}>
              <Link href={menu.path}>
                <a className={'font-inter font-bold text-white fsz-24ptr'}>
                  {menu.label}
                </a>
              </Link>
            </motion.li>
          ))}
          <motion.li variants={modalMenuItems} className={'mt-6'}>
            <ButtonLink href={'/contact'} shadow>
              Contact
            </ButtonLink>
          </motion.li>
          <motion.li variants={modalMenuItems} className={'mt-6'}>
            <AuthorLinks />
          </motion.li>
        </motion.ul>
      </nav>
    </motion.div>
  )
}

export default MobileMenu