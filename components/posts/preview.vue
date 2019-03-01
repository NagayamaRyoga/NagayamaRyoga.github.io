<template lang="pug">
Article(:article='article')
  p.preview {{preview}}
  nuxt-link.button(:to='uri') 続きを読む
</template>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

.preview {
  &::after {
    content: ' ……';
  }
}

.button {
  display: block;
  margin: 0em auto;
  padding: 0.2em 2em;
  width: 10em;
  box-sizing: border-box;
  font-weight: bolder;
  text-align: center;
  text-decoration: none;
  color: $accent;
  background: $base;
  border: solid 1px $accent;
  border-radius: 1em;
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
