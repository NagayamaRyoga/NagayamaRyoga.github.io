<template lang="pug">
Article(:article='article')
  .body
    p.content {{article.preview}}
  .footer
    nuxt-link.button(:to='article.uri') 続きを読む
</template>

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
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

.content {
  &::after {
    content: ' ……';
  }
}

.footer {
  text-align: center;
}
</style>
