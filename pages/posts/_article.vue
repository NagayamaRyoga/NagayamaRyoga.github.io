<template lang="pug">
Article(:article='article')
  .content(v-html='article.bodyHtml')
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
  h2,
  h3 {
    border-block-end: solid 1px $accent;
    font-weight: bolder;
  }
}
</style>

<script>
import Article from '~/components/posts/article';

export default {
  components: {
    Article,
  },
  async asyncData({ params }) {
    const article = require(`~/static/posts/${params.article}.json`);

    return {
      article,
    };
  },
};
</script>
