import React from 'react';

import Link from 'next/link';

import { FORM_URL, MENU } from '../../../constants';
import Author from '../../author/Author';
import AuthorLinks from '../../author/AuthorLinks';
import ButtonLink from '../../ui/ButtonLink';

const Footer: React.VFC = () => (
  <footer className="mt-10 border-t border-lavender bg-black">
    <div className="container flex flex-col items-center pt-9 pb-3 md:pt-12 md:pb-8">
      <nav className="text-center">
        <ul className="md:grid md:grid-flow-col md:gap-8">
          {MENU.map((menu) => (
            <li key={menu.label} className="mb-3 text-center">
              <Link href={menu.path}>
                <a className="font-inter font-bold text-white fsz-24ptr">{menu.label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ButtonLink className="mt-9 md:mt-11" href={FORM_URL} shadow>
          Contact
        </ButtonLink>
      </nav>
      <Author className="mt-9 md:mt-11" />
      <AuthorLinks className="mt-9 md:mt-11" />
      <div className="mt-9 flex items-center md:mt-11">
        <span className="text mr-4 font-inter font-extralight fsz-11ptr">Powered by</span>
        <img
          className="mr-4"
          src="/images/svg/nextjs.svg"
          alt="Next.js"
          width="43"
          height="26"
          loading="lazy"
        />
        <img
          className="mr-4"
          src="/images/svg/tailwindcss.svg"
          alt="TailwindCSS"
          width="95"
          height="12"
          loading="lazy"
        />
        <img
          className=""
          src="/images/svg/vercel.svg"
          alt="Vercel"
          width="49"
          height="12"
          loading="lazy"
        />
      </div>
      <small className="mt-7 font-inter font-extralight fsz-10ptr md:mt-10">&copy; 2022</small>
    </div>
  </footer>
);

export default Footer;
