<template lang="pug">
.wrapper
  Header
  main
    Article(:article='article')
      .body
        .content(v-html='article.bodyHtml')
      .footer
</template>

<style lang="scss" scoped>
.content {
  margin: 3em 0em;
}
</style>

<script>
import Header from '~/components/posts/header';
import Article from '~/components/posts/article';

export default {
  components: {
    Header,
    Article,
  },
  computed: {
    title() {
      return this.article.title;
    },
    preview() {
      return this.article.preview;
    },
  },
  async asyncData({ params }) {
    const article = require(`~/static/posts/${params.article}.json`);

    return {
      article,
      name: params.article,
    };
  },
  head() {
    return {
      title: `${this.title} - 有限猿定理`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'ブログ blog 有限猿定理',
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.title} ${this.preview} ……`,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `無限猿定理 - ${this.title}`,
        },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://nagayamaryoga.github.io/posts/${this.name}/`,
        },
        { hid: 'og:site_name', name: 'og:site_name', content: '有限猿定理' },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.title} ${this.preview} ……`,
        },
      ],
    };
  },
};
</script>
