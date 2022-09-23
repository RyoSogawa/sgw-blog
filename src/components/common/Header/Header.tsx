import React, { useCallback, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import useMount from '../../../lib/hooks/useMount';
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
      className="fixed top-0 left-0 z-sticky w-full pointer-events-none"
      initial={false}
      animate={isMenuOpened ? 'open' : 'closed'}
    >
      <div className="container flex items-center h-[80px] lg:h-[90px]">
        <Link href="/">
          <a className="font-inter font-bold text-white pointer-events-auto fsz-20ptr">
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
