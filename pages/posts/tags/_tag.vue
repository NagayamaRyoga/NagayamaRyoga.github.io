<template lang="pug">
.wrapper
  Header
  main
    nav
      nuxt-link(to='/posts/') 記事一覧
      font-awesome-icon.separator(:icon='["fas", "caret-right"]')
      Tag(:tag='tag')
    Preview(v-for='article in articles' :article='article' :key='article.uri')
</template>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

nav {
  margin: 1em 0em;
  padding: 1em 2em;
  background: $base;
  font-weight: bolder;
  filter: drop-shadow(6px 6px 0px $shadow);

  .separator {
    margin: 0em 0.5em;
    font-weight: lighter;

    &::before {
      content: '>';
    }
  }

  a {
    color: $accent;
    text-decoration: none;
  }
}
</style>

<script>
import Header from '~/components/posts/header';
import Preview from '~/components/posts/preview';
import Tag from '~/components/posts/tag';
import { getSummary } from '~/assets/js/posts/summary';

export default {
  components: {
    Header,
    Preview,
    Tag,
  },
  async asyncData({ params }) {
    const tag = params.tag;
    const articles = await getSummary();

    return {
      tag: tag,
      articles: articles.filter(x => x.tags.indexOf(tag) !== -1),
    };
  },
  head() {
    return {
      title: `タグ:${this.tag} - 有限猿定理`,
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
        {
          hid: 'og:title',
          name: 'og:title',
          content: `タグ:${this.tag} - 有限猿定理`,
        },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://nagayamaryoga.github.io/posts/tags/${this.tag}`,
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
