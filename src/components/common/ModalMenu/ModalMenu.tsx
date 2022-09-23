import React, { useCallback, useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { FORM_URL, MENU } from '../../../lib/constants';
import useAriaHidden from '../../../lib/hooks/useAriaHidden';
import useFocusTrap from '../../../lib/hooks/useFocusTrap';
import AuthorLinks from '../../author/AuthorLinks';
import ButtonLink from '../../ui/ButtonLink';

import type { Variants } from 'framer-motion';

const modalMenus: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

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
};

const calcPosition = (burgerRef: React.RefObject<HTMLButtonElement>) => {
  if (!burgerRef.current) return null;

  const { x, y, width, height } = burgerRef.current.getBoundingClientRect();
  const xPos = x + width / 2;
  const yPos = y + height / 2;
  return `${xPos}px ${yPos}px`;
};

export type ModalMenuProps = {
  isOpen: boolean;
  burgerRef: React.RefObject<HTMLButtonElement>;
  onClose: () => void;
};

const ModalMenu: React.VFC<ModalMenuProps> = ({ isOpen, burgerRef, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  useAriaHidden(ref, isOpen);
  useFocusTrap({ ref, isOpen, onClose });

  const [buttonPosition, setButtonPosition] = useState('calc(100% - 58px) 36px');
  const [shouldRender, setShouldRender] = useState(false);

  const calcAndSetPosition = useCallback(() => {
    setShouldRender(false);
    const burgerCenter = calcPosition(burgerRef);
    if (burgerCenter) setButtonPosition(burgerCenter);
    setShouldRender(true);
  }, [burgerRef]);

  useEffect(() => {
    if (!burgerRef?.current) return;

    calcAndSetPosition();
    window.addEventListener('resize', calcAndSetPosition);
    return () => {
      window.removeEventListener('resize', calcAndSetPosition);
    };
  }, [burgerRef, calcAndSetPosition]);

  const modal: Variants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at ${buttonPosition})`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: `circle(28px at ${buttonPosition})`,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  // rerender motion component when resized
  // because the button position is not calculated correctly
  if (!shouldRender) return null;

  return (
    <motion.div
      ref={ref}
      className="pointer-events-auto absolute top-0 left-0 h-screen w-screen bg-black text-center"
      variants={modal}
      role="dialog"
      aria-labelledby="global menu"
      aria-hidden={!isOpen}
      aria-modal
    >
      <nav className="mt-24">
        <motion.ul className="grid grid-flow-row justify-center gap-5" variants={modalMenus}>
          {MENU.map((menu) => (
            <motion.li key={menu.label} variants={modalMenuItems}>
              <Link href={menu.path}>
                <a className="font-inter font-bold text-white fsz-24ptr">{menu.label}</a>
              </Link>
            </motion.li>
          ))}
          <motion.li variants={modalMenuItems} className="mt-6">
            <ButtonLink href={FORM_URL} shadow>
              Contact
            </ButtonLink>
          </motion.li>
          <motion.li variants={modalMenuItems} className="mt-6">
            <AuthorLinks />
          </motion.li>
        </motion.ul>
      </nav>
    </motion.div>
  );
};

export default ModalMenu;
