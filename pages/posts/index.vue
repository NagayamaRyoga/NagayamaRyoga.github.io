<template lang="pug">
.wrapper
  Header
  main
    Preview(v-for='article in articles' :article='article' :key='`${article.dir}/${article.base}`')
</template>

<style lang="scss" scoped></style>

<script>
import Header from '~/components/posts/header';
import Preview from '~/components/posts/preview';
import { fileMap } from '~/static/posts/summary.json';

export default {
  components: {
    Header,
    Preview,
  },
  data() {
    const articles = Object.values(fileMap).sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );

    return {
      articles,
    };
  },
  head() {
    return {
      title: '有限猿定理',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'ブログ blog 有限猿定理',
        },
        {
          hid: 'description',
          name: 'description',
          content: '技術記事がメインのブログ',
        },
        { hid: 'og:title', name: 'og:title', content: '無限猿定理' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://nagayamaryoga.github.io/posts/',
        },
        { hid: 'og:site_name', name: 'og:site_name', content: '有限猿定理' },
        {
          hid: 'og:description',
          name: 'og:description',
          content: '技術記事がメインのブログ',
        },
      ],
    };
  },
};
</script>
