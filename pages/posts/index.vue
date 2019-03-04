<template lang="pug">
.wrapper
  Header
  main
    Preview(v-for='article in articles' :article='article' :key='article.uri')
</template>

<script>
import Header from '~/components/posts/header';
import Preview from '~/components/posts/preview';
import { getSummary } from '~/assets/js/posts/summary';

export default {
  components: {
    Header,
    Preview,
  },
  async asyncData() {
    const articles = await getSummary();

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
