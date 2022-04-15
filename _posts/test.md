---
title: 'Test Post'
emoji: '🪧'
tags: ['test', 'tag']
publishedAt: '2021-12-18'
updatedAt: '2021-12-19'
---

この記事は投稿スタイル確認用のテスト記事です。

## 目次

## 見出し

## h2 Heading

### h3 Heading

#### h4 Heading

\_\_

## 本文

Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad architecto, at blanditiis corporis culpa excepturi explicabo facere fuga, fugit ipsa iusto laborum magnam modi odit, quibusdam quos tempora?

## 引用文

> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam corporis, facilis id minima nemo neque repellat sunt voluptatum. Excepturi maxime nobis rem rerum similique. Illo iure nemo quo.

## コードブロック

```jsx
import PagePost from '../../components/page/PagePost'
export const meta = {
  title: 'Test Post',
  tags: ['test', 'tag'],
  publishedAt: '2021-12-18',
  updatedAt: '2021-12-19',
}
export default ({ children }) => <PagePost meta={meta}>{children}</PagePost>
```

## 画像

![logo](/images/logo/dinosaur_record_rectangle.svg 'dinosaur')

## テキスト装飾

[サイト内リンク](/about)

[外部リンク](https://google.com)

`code`

**bold**

_italic_

~~del~~

## リスト

### 番号なしリスト

- item1
- item2
- item3

### 番号つきリスト

1. item1
2. item2
3. item3

## 横線

<hr />

## テーブル

| col1 | col2 | col3 | col4                                            |
| ---- | ---- | ---- | ----------------------------------------------- |
| cell | cell | cell | cell                                            |
| cell | cell | cell | cell                                            |
| cell | cell | cell | this is long text cell. this is long text cell. |
