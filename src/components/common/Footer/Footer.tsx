import React from 'react'
import Link from 'next/link'
import ButtonLink from '../../ui/ButtonLink'
import Author from '../../author/Author'
import AuthorLinks from '../../author/AuthorLinks'
import { MENU } from '../../../lib/constants'

const Footer: React.VFC = () => {
  return (
    <footer className={'bg-black border-t border-lavender'}>
      <div className="container flex flex-col items-center pt-9 pb-3 md:pt-12 md:pb-8">
        <nav className={'text-center'}>
          <ul className={'md:grid md:grid-flow-col md:gap-8'}>
            {MENU.map(menu => (
              <li key={menu.label} className={'mb-3 text-center'}>
                <Link href={menu.path}>
                  <a className={'font-inter font-bold text-white fsz-24ptr'}>
                    {menu.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink className={'mt-9 md:mt-11'} href={'/contact'} shadow>
            Contact
          </ButtonLink>
        </nav>
        <Author className={'mt-9 md:mt-11'} />
        <AuthorLinks className={'mt-9 md:mt-11'} />
        <div className="flex items-center mt-9 md:mt-11">
          <span className="mr-4 font-inter font-extralight text fsz-11ptr">
            Powered by
          </span>
          <img
            className={'mr-4'}
            src="/images/svg/nextjs.svg"
            alt="Next.js"
            width="43"
            height="26"
            loading="lazy"
          />
          <img
            className={'mr-4'}
            src="/images/svg/tailwindcss.svg"
            alt="TailwindCSS"
            width="95"
            height="12"
            loading="lazy"
          />
          <img
            className={''}
            src="/images/svg/vercel.svg"
            alt="Vercel"
            width="49"
            height="12"
            loading="lazy"
          />
        </div>
        <small className="mt-7 font-inter font-extralight md:mt-10 fsz-10ptr">
          &copy; 2022
        </small>
      </div>
    </footer>
  )
}

export default Footer
