import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../../components/common/Layout'
import Heading from '../../components/ui/Heading'
import Profile from '../../components/about/Profile'
import Values from '../../components/about/Values'
import Interests from '../../components/about/Interests'
import FavoriteTools from '../../components/about/FavoriteTools'
import WorkExperience from '../../components/about/WorkExperience'
import ImgWithCats from '../../../public/images/with-cats.jpg'
// import ButtonLink from '../../components/ui/ButtonLink'

const PageAbout: NextPage = () => (
  <Layout>
    <section className="py-40">
      <div className="container">
        <Heading as="h1">About</Heading>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Profile />
      </div>
    </section>

    <Values />

    <div className="pb-10 mx-auto max-w-[650px]">
      <Image src={ImgWithCats} alt="" placeholder="blur" />
    </div>

    <Interests />

    <FavoriteTools />

    <WorkExperience />

    <section className="section">
      <div className="container text-center">
        <Heading as="h2" id="education">
          Education
        </Heading>
        <ul className="inline-block pl-6 mt-10 tracking-wider leading-8 list-disc text-left">
          <li>2019年 EATビジネス予備校卒業</li>
          <li>2014年 九州大学芸術工学部音響設計学科卒業</li>
        </ul>
      </div>
    </section>

    {/* <div className="container py-20 text-center"> */}
    {/*  <p>（仕事にはあまり関係のない趣味の話）</p> */}
    {/*  <ButtonLink */}
    {/*    href={'/about/hobbies'} */}
    {/*    theme={'secondary'} */}
    {/*    className={'mt-6'} */}
    {/*  > */}
    {/*    See My Hobbies */}
    {/*  </ButtonLink> */}
    {/* </div> */}
  </Layout>
)

export default PageAbout
