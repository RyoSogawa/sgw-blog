import React from 'react';

import cn from 'classnames';

import Heading from '../../ui/Heading';
import s from './WorkExperience.module.css';

export type WorkExperienceProps = {
  className?: string;
};

const data = [
  {
    year: 2022,
    title: '複数のチームに在籍しながら個人開発を中心に活動',
    desc: 'チームメンバー3人がそれぞれのチームに別れて広い知見を集める。今後の動きを決めるために自分を見つめ直す期間に。',
    works: [
      {
        title: 'any株式会社',
        note: '業務委託',
        subTitle: 'ナレッジ共有サービス「Qast」開発',
        list: ['Reactでのフロントエンド開発'],
      },
      {
        title: 'ONE SWORD株式会社',
        note: '',
        subTitle: 'システム開発チームマネージャー',
        desc: 'チームメンバー3人が別のチームに派遣、知見を貯めながら個人開発をメインに行う。',
        list: ['Webサイト制作', 'npm パッケージ開発', '個人開発'],
      },
    ],
  },
  {
    year: 2019,
    title: '開発チームマネージャー',
    desc: '学生の頃からの知り合い2人と共に開発チームを結成。DX(開発者体験)とUXの向上を目標に様々な施策を実施。',
    works: [
      {
        title: 'ONE SWORD株式会社',
        note: '',
        list: [
          'Next.js / Nuxt.js での業務システム開発',
          'Next.js / Gatsby でのヘッドレスCMSサイト制作',
          'Apollo / Express での WebAPI ( REST / GraphQL )開発',
          '自動ユニットテスト / インテグレーションテスト',
          'AWS でのインフラ設計・構築',
          'スプレッドシート、GAS でのシステム開発',
          'Figma / Storybook を使ったシステムUI設計',
        ],
      },
    ],
  },
  {
    year: 2016,
    title: 'フリーランスに転向',
    desc: '学生の頃の知り合いとともに立ち上げ。Webの世界へ。',
    works: [
      {
        title: 'ONE SWORD株式会社',
        note: '',
        list: ['Web制作', 'WordPressプラグイン開発', 'PHPでのWebシステム開発', 'RPAシステム開発'],
      },
    ],
  },
  {
    year: 2014,
    title: 'エンジニアとしてのキャリアをスタート',
    desc: '漠然と美しいコードに興味を持つように。',
    works: [
      {
        title: '株式会社近畿システムサービス',
        note: '雇用',
        list: ['VB.netでのWindowsソフトウェア開発', 'SQL'],
      },
    ],
  },
];

const WorkExperience: React.VFC<WorkExperienceProps> = ({ className }) => (
  <section className={cn(className, 'section')}>
    <div className="container">
      <Heading as="h2" id="work-experience">
        Work Experience
      </Heading>
      <ul className={s.timeline}>
        {data.map((d) => (
          <li key={d.year} className={s.timeline__item}>
            <div className={s.timeline__year}>{d.year}年〜</div>
            <div className={s.timeline__content}>
              <div className="rounded bg-darkBlue/60 p-5">
                <h3 className="-mt-0.5 font-inter font-bold text-white fsz-22ptr">{d.title}</h3>
                <p className="mt-4">{d.desc}</p>
                {d.works.map((work) => (
                  <div key={work.title} className="mt-6 border-t border-charcoal">
                    <h4 className="mt-4 font-inter text-white">
                      {work.title}
                      {work.note && (
                        <span className="ml-2 text-text fsz-12ptr">( {work.note} )</span>
                      )}
                    </h4>
                    <ul className="list-disc pl-5">
                      {work.list.map((item) => (
                        <li key={item} className="mt-1 leading-7 tracking-wider first-of-type:mt-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WorkExperience;
