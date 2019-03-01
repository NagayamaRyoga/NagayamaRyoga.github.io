<template lang="pug">
.wrapper
  main
    Preview(v-for='article in articles' :article='article' :key='`${article.dir}/${article.base}`')
</template>

<style lang="scss" scoped></style>

<script>
import Preview from '~/components/posts/preview';
import { fileMap as articles } from '~/static/posts/summary.json';

export default {
  components: {
    Preview,
  },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.articles = Object.values(articles).sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );
  },
};
</script>
