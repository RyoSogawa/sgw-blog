import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex flex-col items-center my-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-5xl font-bold tracking-tighter leading-tight md:pr-8 md:text-8xl">
        Blog.
      </h1>
      <h4 className="mt-5 text-lg text-center md:pl-8 md:text-left">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="hover:text-blue-600 underline transition-colors duration-200"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4>
    </section>
  )
}

export default Intro
