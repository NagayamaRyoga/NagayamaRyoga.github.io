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
import { getArticle } from '~/assets/js/posts/article';

export default {
  components: {
    Header,
    Article,
  },
  async asyncData({ params }) {
    const article = await getArticle(params.article);

    return {
      article,
    };
  },
  head() {
    return {
      title: `${this.article.title} - 有限猿定理`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'ブログ blog 有限猿定理',
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.article.title} ${this.article.preview} ……`,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `無限猿定理 - ${this.article.title}`,
        },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://nagayamaryoga.github.io/posts/${this.article.id}/`,
        },
        { hid: 'og:site_name', name: 'og:site_name', content: '有限猿定理' },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.article.title} ${this.article.preview} ……`,
        },
      ],
    };
  },
};
</script>
