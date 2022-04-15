---
title: '本ブログの構成について'
emoji: '⚙️'
tags: ['Gatsby']
publishedAt: '2021-12-30'
updatedAt: '2021-12-30'
---

このブログは

- Gatsby
- markdown
- TailwindCSS
- Vercel

を使っています。

https://github.com/RyoSogawa/sgw-blog-gatsby

それぞれについて簡単に解説したいと思います。

## 目次

## Gatsby について

このブログを作り始めたころ、ちょうど[Remix](https://remix.run)が登場したこともあり、

- Next.js
- Remix
- Gatsby

の 3 つの選択肢がありました。

Remix の素振りも兼ねていいかもなとも思ったのですが、そんなに頻繁に更新しないであろうブログとの相性を考えると SSG にしようかと。

使い慣れてる Next.js を使って作りリリースしたものの、途中で Gatsby のほうが条件がよいことに後々気づいたため移行しました。

※そのときのことはまた別の記事で書こうと思います。

## 記事投稿

記事投稿の方法は

- markdown
- GitHubIssue
- NotionAPI
- microCMS 等のヘッドレス CMS

等から markdown を選択しました。

GitHub の issue を記事とし、GitHubActions で GitHubPage にデプロイするリポジトリ（[Gh-cms](https://github.com/oscarnevarezleal/gh-cms)）がおもしろかったので、なんらかの形で GitHubIssue を使いたいなと思ってたんですけど、とりあえず早くリリースできそうな markdown を選択しました。

将来的にはポートフォリオのページを一部パスワード制限で公開等しようと思っているので、そのときはまた別の方法を使おうと思ってます。

## TailwindCSS について

普段から TailwindCSS は好みでよく使っているのでこのブログでも採用しました。
特別 UI フレームワークが必要になったら [HeadlessUI](https://headlessui.dev/) でも入れようと思います。

他にも TailwindCSS を使った理由として、`@tailwindcss/typography` のプラグインが美しいことがあります。

文字組みのスタイルとして、[Nextra](https://nextra.vercel.app/) でも採用されており、[SWR のドキュメント](https://swr.vercel.app/)もこのプラグインの文字組みがメインで使われています。
技術メインのブログとしては見慣れた文字組みになって見やすいと思いました。

### 好みの設定

#### z-index

[chakra-ui の z-index の設定値](https://chakra-ui.com/docs/theming/theme#z-index-values)がわかりやすかったので、基本的にこの値で上書きしてます。

```js
zIndex: {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
},
```

どんな要素の z-index なのかが分かりやすくなるので、相対的な上下関係を調整することが減ります。

#### container

コンテナのテーマは中央寄せにし、padding も指定します。（extend）

```js
container: {
  center: true,
  padding: {
    DEFAULT: '1rem',
    md: '2rem',
  },
}
```

あとは breakpoint ごとにコンテナのサイズを plugin のところで定義し直すことで、TailwindCSS の container クラスをカスタムしています。

```js
plugins: [
  function ({ addComponents }) {
    addComponents({
      '.container': {
        maxWidth: '100%',
        '@screen sm': {
          maxWidth: '640px',
        },
        '@screen md': {
          maxWidth: '768px',
        },
        '@screen lg': {
          maxWidth: '1024px',
        },
      },
    })
  },
],
```

## Vercel

デプロイ先は安定の Vercel です。
無料プランでも国内リージョンのエッジサーバーが使えるためサイトの表示速度向上が見込めます（Netlify よりも）。

料金まわりはちょっと気になりますが、とりあえず ISR をいれない純粋な SG であればよほど更新しまくらない限り問題ないかと。

## 追加したい機能

今後実装したい機能をメモがてら

- パスワード制限のポートフォリオページ
- ブログカード
- ダークモード
- 目次、見出しリンク
- コメント機能
