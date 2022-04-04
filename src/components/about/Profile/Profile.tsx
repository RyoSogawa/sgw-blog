import React from 'react'
import cn from 'classnames'
import Author from '../../author/Author'

export type ProfileProps = {
  className?: string
}

const Profile: React.VFC<ProfileProps> = ({ className }) => {
  return (
    <div
      className={cn(
        className,
        'grid gap-6 mx-auto mt-8 max-w-[650px] lg:grid-flow-col lg:gap-12'
      )}
    >
      <Author className={'shrink-0'} imageType={'photo'} />
      <div>
        <p>
          香川県出身福岡県在住の 33 歳 1
          児の父。フリーランスでエンジニアをしています。
        </p>
        <p className={'mt-4'}>
          React を使ったWebフロントエンドを中心に、企画 / 要件定義 / UI デザイン
          / システム設計 / バックエンド / インフラ /
          ネイティブアプリ等もやっています。
        </p>
      </div>
    </div>
  )
}

export default Profile
