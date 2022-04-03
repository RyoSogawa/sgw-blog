import React from 'react'
import cn from 'classnames'
import Heading from '../../ui/Heading'

export type InterestsProps = {
  className?: string
}

const data = [
  {
    icon: '🚪',
    title: 'UI Design',
  },
  {
    icon: '🧘‍♂',
    title: (
      <>
        Developer <br className={'sm:hidden lg:block'} />
        eXperience
      </>
    ),
  },
  {
    icon: '🚀',
    title: 'Automation',
  },
]

const Interests: React.VFC<InterestsProps> = ({ className }) => {
  return (
    <section className={cn(className, 'section')}>
      <div className="container">
        <Heading as={'h2'} id={'interests'}>
          Interests
        </Heading>
        <ul className="grid gap-6 justify-center mt-10 lg:grid-flow-col lg:gap-14">
          {data.map(d => (
            <li key={d.icon} className={'flex items-center'}>
              <div
                className={
                  'grid shrink-0 place-items-center mr-4 w-16 h-16 rounded-full border border-white fsz-26ptr'
                }
              >
                {d.icon}
              </div>
              <h3 className={'font-inter font-bold text-white fsz-28ptr'}>
                {d.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Interests
