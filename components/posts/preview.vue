<template lang="pug">
Article(:article='article')
  .body
    p.preview {{preview}}
  .footer
    nuxt-link.button(:to='uri') 続きを読む
</template>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

.preview {
  &::after {
    content: ' ……';
  }
}

.footer {
  text-align: center;
}
</style>

<script>
import Article from '~/components/posts/article';

export default {
  components: {
    Article,
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    preview() {
      return this.article.preview;
    },
    uri() {
      const name = this.article.base.replace(/\.json$/, '');
      return `/posts/${name}`;
    },
  },
};
</script>
