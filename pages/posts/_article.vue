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

<style lang="scss">
@import '~/assets/scss/theme.scss';

.content {
  h1,
  h2 {
    margin: 1em 0em;
    font-weight: 500;
    border-block-end: solid 1px $accent;
  }

  h3 {
    margin-block-start: 1.6em;
    margin-block-end: 0.8em;
    font-weight: 300;
  }

  a {
    color: $accent;
  }
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
  },
  async asyncData({ params }) {
    const article = require(`~/static/posts/${params.article}.json`);

    return {
      article,
      base: params.article,
    };
  },
  head() {
    return {
      title: `有限猿定理 - ${this.title}`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'ブログ blog 有限猿定理',
        },
        { hid: 'description', name: 'description', content: `${this.title}` },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `無限猿定理 - ${this.title}`,
        },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://nagayamaryoga.github.io/posts/${this.base}/`,
        },
        { hid: 'og:site_name', name: 'og:site_name', content: '有限猿定理' },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.title}`,
        },
      ],
    };
  },
};
</script>
