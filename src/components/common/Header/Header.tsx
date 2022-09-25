import React, { useCallback, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import useMount from '../../../hooks/useMount';
import ButtonBurger from '../ButtonBurger';
import ModalMenu from '../ModalMenu';

const Header: React.VFC = () => {
  const burgerRef = useRef<HTMLButtonElement>(null);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const mounted = useMount();

  const handleBurgerClick = useCallback(() => {
    setIsMenuOpened((prev) => !prev);
  }, []);

  const handleModalClose = useCallback(() => {
    // fire event after burger clicked
    setTimeout(() => {
      setIsMenuOpened(false);
    }, 300);
  }, []);

  return (
    <motion.header
      className="pointer-events-none fixed top-0 left-0 z-sticky w-full"
      initial={false}
      animate={isMenuOpened ? 'open' : 'closed'}
    >
      <div className="container flex h-[80px] items-center lg:h-[90px]">
        <Link href="/">
          <a className="pointer-events-auto font-inter font-bold text-white fsz-20ptr">
            Ryo Sogawa
          </a>
        </Link>
        <div className="grow" />
        <ButtonBurger ref={burgerRef} isOpen={isMenuOpened} onClick={handleBurgerClick} />
      </div>
      {/**
       prevent useLayoutEffect on SSR
       @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
       */}
      {mounted && (
        <ModalMenu burgerRef={burgerRef} isOpen={isMenuOpened} onClose={handleModalClose} />
      )}
    </motion.header>
  );
};

export default Header;
