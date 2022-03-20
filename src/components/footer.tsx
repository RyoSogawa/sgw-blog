import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-4xl font-bold tracking-tighter leading-tight text-center lg:pr-4 lg:mb-0 lg:w-1/2 lg:text-[2.5rem] lg:text-left">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col justify-center items-center lg:flex-row lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="py-3 px-12 mx-3 mb-6 font-bold text-white hover:text-black bg-black hover:bg-white border border-black transition-colors duration-200 lg:px-8 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
