<template lang="pug">
.wrapper
  Header
  main
    Tags(:tags='tags')
</template>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

.tags {
  margin: 2em 0em;
  padding: 1em 2em;
  background: $base;
  font-weight: 300;
  filter: drop-shadow(6px 6px 0px $shadow);
}
</style>

<script>
import Header from '~/components/posts/header';
import Tags from '~/components/posts/tags';
import { getSummary } from '~/assets/js/posts/summary';

export default {
  components: {
    Header,
    Tags,
  },
  async asyncData() {
    const summary = await getSummary();
    const tags = summary
      .reduce((a, b) => [...a, ...b.tags], [])
      .filter((x, i, tags) => tags.slice(0, i).indexOf(x) === -1)
      .sort((a, b) => a.localeCompare(b, {}, { sensitivity: 'base' }));

    return {
      tags,
    };
  },
  head() {
    return {
      title: 'タグ一覧 - 有限猿定理',
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
        { hid: 'og:title', name: 'og:title', content: 'タグ一覧 - 無限猿定理' },
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
