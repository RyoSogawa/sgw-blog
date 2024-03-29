import React from 'react';

import Image from 'next/image';

import ImgWithCats from '../../../../public/images/with-cats.jpg';
import Layout from '../../common/Layout';
import Profile from '../../common/Profile/Profile';
import Seo from '../../functional/Seo';
import Heading from '../../ui/Heading';
import FavoriteTools from './parts/FavoriteTools';
import Interests from './parts/Interests';
import Values from './parts/Values';
import WorkExperience from './parts/WorkExperience';

const PageAbout: React.VFC = () => {
  return (
    <Layout>
      <Seo title="About" pathName="/about" />
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

      <div className="mx-auto max-w-[650px] pb-10">
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
          <ul className="mt-10 inline-block list-disc pl-6 text-left leading-8 tracking-wider">
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
  );
};

export default PageAbout;
