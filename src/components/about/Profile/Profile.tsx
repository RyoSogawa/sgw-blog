import React from 'react';

import cn from 'classnames';

import Author from '../../author/Author';

export type ProfileProps = {
  className?: string;
};

const Profile: React.VFC<ProfileProps> = ({ className }) => (
  <div
    className={cn(className, 'mx-auto mt-8 grid max-w-[650px] gap-6 lg:grid-flow-col lg:gap-12')}
  >
    <Author className="shrink-0" imageType="photo" />
    <div className="prose">
      <p>香川県出身福岡県在住の 33 歳 1 児の父。</p>
      <p>2014年にエンジニアとしてのキャリアを開始し、2016年からはフリーランスに転向。</p>
      <p className="mt-4">
        React
        を使ったWebフロントエンド開発を中心に、UIデザイン、企画、チームマネジメント、アジャイルマネジメント等も力を入れてます。
      </p>
    </div>
  </div>
);

export default Profile;
