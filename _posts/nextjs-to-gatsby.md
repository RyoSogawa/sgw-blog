---
title: 'ブログをNext.jsからGatsbyに移行した記録'
emoji: '🌊'
tags: ['Gatsby', 'Next.js']
publishedAt: '2021-12-31'
updatedAt: '2021-12-31'
---

Next.js を使って作ったこのブログをなぜ、どのように Gatsby に移行したかを記録しようと思います。

## 目次

## なぜ移行したのか

### Next.js はここがつらかった

Next.js の開発体験はかなり良くて、それだけ見ると Gatsby よりも素晴らしいのですが、つらみは markdown まわりにありました。

markdown で記事投稿をする際に、

1. markdown ファイルを読み込む関数を作る
2. `@next/mdx` プラグインを使う

の選択肢がありました。

2 の方法で始めたのですが、記事一覧では本文を取得出来なかったり、記事シングルでは slug を取得出来なかったり、今後拡張していこうと思ったときの労力がかなり大きいことに気づきました。

かと言って、1 の方法はシンプルに面倒だな。。と思い、改めて Gatsby を検討することに。

### Gatsby はここがよかった

元祖(?)SSG フレームワークの Gatsby は markdown でのブログとの相性はめちゃくちゃいいです。

https://github.com/gatsbyjs/gatsby-starter-blog のテンプレートをもとにちょっといじるだけで、

- markdown ファイルをもとに GraphQL クエリが発行される
  - 記事フィールドの中には excerpt がある（地味にすごい）
  - 記事取得クエリに sort や filter のロジックが始めからある
- 同クエリ用の型定義ファイルが生成される
- RSSFeed が生成される
- sitemap が生成される

等、Next.js で同じことをやろうと思うとちょっとしんどいことを、始めから揃えてくれてます。

これは便利すぎる。。

かくして、ブログを Gatsby に移行することにしました。

## 移行方法

色々つまづきました。

### ①TS 化

Next.js から Gatsby に移行するにあたり、まず始めに TS 化の壁に当たりました。

ドキュメントがちょっとわかりにくいのもあって、TS 化のハードルは微妙に高く、以下の記事に助けてもらいました。

https://zenn.dev/ryo_kawamata/articles/gatsby-ts-2020

※ここからはほぼこの記事の内容と被ります。

#### meta データ型

記事内の meta データ（frontmatter）の中身を変えたいときに、markdown 内を変えると自動的に新しいフィールドが生成されることに驚きつつも、初期登録されていたフィールドが消えませんでした。  
これは `gatsby-node.ts` の `createSchemaCustomization` 関数内に定義されているスキーマを更新することで変更できます。

#### GraphQL スキーマ用の型

graphql-codegen 等でやるようなスキーマからの型生成はなんと Gatsby プラグイン化されていました！

https://github.com/cometkim/gatsby-plugin-typegen

こちらのプラグインを設定した状態で、`pageQuery` 等を記述すると自動的に型ファイルが生成されます！

「自動的に生成される」の響きはこころが温まりますね。。

型定義ファイルでエラーが出ないように tsconfig を設定したりする必要があったり、特にこれといった修正をしてなくてもなぜか差分が生成されてたりとちょっと気になることはありますが、自動生成してくれるのであれば多くは求めません。

ちなみに、template 系のコンポーネントの型は、`pages` 配下のコンポーネント用の型定義方法と同様でした。

### ② コンポーネントの置き換え

`next/link`、`next/image` コンポーネントを `Link`、`StaticImage` コンポーネントに置き換えていきます。  
`Link` のほうは特に問題なく移行できましたが、`StaticImage` は結構癖が強いです。

例えば `props.src` に変数が使えないので、src を配列で設定していたものは StaticImage コンポーネント自体を配列で保持するようにしました。（ちょっとごちゃつく）

こういう欠点もありますが、placeholder をいくつかの種類から選択できるのは Gatsby のいいところ。

このブログではだいたい `tracedSVG` を使ってます。

### ③ useRouter の置き換え

useRouter を使って取得していた pathname 等の情報は、`useLocation` を使います。

```tsx
import { useLocation } from '@reach/router'
const { pathname } = useLocation()
```

### ④CSS Modules

一番これがしんどかったです。
Gatsby への CSS Modules の導入自体はドキュメントもあり問題ないのですが、ちょっと特殊は使い方をしていて、ドキュメントに推奨されている方法では TS でエラーが出てしまいます。

以下の記事を参考に、require を使う方法で対応しました。

https://qiita.com/suzuki_sh/items/8f4201e7c43c7a0a3eb6

```tsx
const WorkExperience = (): JSX.Element => {
  const style = require('./WorkExperience.module.css')

  return (
    <section>
      <h2 id={'work-experience'}>Work Experience</h2>
      <ul className={style.timeline}>
      // ...
```

不格好なのでなんとかしたいのですが。。

### ⑤head タグ

`next/head` や `next-seo` を使って設定していた meta 情報は `react-helmet` を使って置き換えていきます。

このプロジェクトでは、Seo コンポーネントを作って対応しました。  
Seo 向けでない meta 情報はコンポーネント分けてもいいかもなと思ってます。
