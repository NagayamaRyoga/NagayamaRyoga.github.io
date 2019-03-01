---
title: ウェブページとミニブログを作った
publishedAt: 2019-03-01
tags:
    - Nuxt.js
    - Markdown
---

## はじめに

JavaScriptフレームワークである[Nuxt.js](https://nuxtjs.org/)を使ってウェブページとミニブログ(当サイト)を作った。

以下では当サイトを構成する技術的要素について紹介する。

## 構成要素

### Nuxt.js

フロントエンドはNuxt.jsで作成した。
単一ファイルコンポーネントやScoped Styleが簡単に扱える点が大変によい。

### GitHub Pages

当サイトは静的ファイルホスティングサービスである、GitHub Pagesを利用して配信されている。

記事などにもCMSの類は用いていない。

### Markdown

記事はMarkdownで記述されている。
それらを[processmd](https://github.com/tscanlin/processmd)で変換し、読み込み描画している。

### CSS

CSSフレームワークは使用せずフルスクラッチした。

## 結び

高機能とは言い難いが、シンプルでまとまりのあるものが完成した。

研究や趣味での気付きや知見を言語化できる場にしたい。
