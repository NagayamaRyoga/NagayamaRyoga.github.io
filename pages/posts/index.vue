<template lang="pug">
.wrapper
  main
    Preview(v-for='article in articles' :article='article')
</template>

<style lang="scss" scoped></style>

<script>
import Preview from '~/components/posts/preview';
import Summary from '~/static/posts/summary.json';

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
    this.articles = Object.values(Summary.fileMap).sort(
      (a, b) => a.publishedAt - b.publishedAt
    );
  },
};
</script>
