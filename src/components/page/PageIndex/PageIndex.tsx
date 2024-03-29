import React from 'react';

import posts from '../../../../.contents/posts.json';
import Layout from '../../common/Layout';
import PostCard from '../../common/PostCard';
import Profile from '../../common/Profile';
import Seo from '../../functional/Seo';
import ButtonLink from '../../ui/ButtonLink';
import Heading from '../../ui/Heading';
import FvCopy from './parts/FvCopy';

import type { PostItem } from '../../../type';

const PageIndex: React.VFC = () => {
  const recentPosts = posts.slice(0, 4) as PostItem[];

  return (
    <Layout>
      <Seo />
      <FvCopy />
      <section className="section">
        <div className="container">
          <Heading as="h2" size="h6" id="my-main-focus">
            My Main Focus
          </Heading>
          <Heading as="h3" size="h3" className="mt-4">
            心の豊かさを支える
            <br />
            サービスの提供
          </Heading>
          <div className="prose mt-8 text-center">
            <div className="inline-block text-left">
              <p>人の心をより豊かにするサービスを作りたいと思っています。</p>
              <p>ポジティブな感情を増やし、幸せの総量に貢献できるようなサービス、例えば、</p>
              <ul className="text-white">
                <li>時間を奪うのではなく生み出す</li>
                <li>依存させるのではなく自由にする</li>
              </ul>
              <p>そんなサービスが好きです。</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Heading as="h2" size="h6" id="what-i-can-do">
            What I can do
          </Heading>
          <Heading as="h3" size="h3" className="mt-4">
            丁寧で持続可能な
            <br />
            Webサービス開発
          </Heading>
          <div className="prose mt-8 text-center">
            <div className="inline-block text-left">
              <p>
                小~中規模のWebサービス設計・開発が得意で、
                <br />
                特に、制作の目的や果たすべき役割を大事にしています。
              </p>
              <ul>
                <li>企画、要件定義</li>
                <li>デザイン、設計</li>
                <li>フロントエンド/バックエンド開発</li>
                <li>インフラ構築、運用</li>
                <li>リサーチ、改善</li>
              </ul>
              まで一気通貫で担当します。
              <p>お困りごとがあったり、サービスを作りたいという方は、ぜひご相談ください。</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container max-w-[700px]">
          <Heading as="h2" id="about">
            About
          </Heading>
          <Profile />
          <div className="mt-8 text-center">
            <ButtonLink href="/about" theme="secondary">
              More About Me
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Heading as="h2" id="blog">
            Blog
          </Heading>
          <div className="mt-4 grid gap-6 lg:mt-8">
            {recentPosts.map((post) => (
              <PostCard key={post.link} post={post} />
            ))}
          </div>
          <div className="mt-8 text-center lg:mt-12">
            <ButtonLink href="/blog" theme="secondary">
              See All Posts
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Heading as="h2" id="works">
            Works
          </Heading>
          <p className="mt-8 text-center">Now Developing...🛠</p>
        </div>
      </section>
    </Layout>
  );
};

export default PageIndex;
