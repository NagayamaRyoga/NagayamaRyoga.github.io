<template lang="pug">
article
  .header
    .date
      nuxt-link(:to='article.uri') {{date}}
    h1
      nuxt-link(:to='article.uri') {{article.title}}
    Tags(:tags='article.tags')
  slot
</template>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

article {
  margin: 1em 0em;
  padding: 1em 2em;
  background: $base;
  font-weight: 300;
  filter: drop-shadow(6px 6px 0px $shadow);
}

.header {
  .date {
    color: $accent;
    font-weight: bolder;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  h1 {
    padding: 0em;
    border-block-end: solid 1px $accent;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>

<script>
import Tags from '~/components/posts/tags';

export default {
  components: {
    Tags,
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      const date = new Date(this.article.publishedAt);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
  },
};
</script>
