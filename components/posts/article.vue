<template lang="pug">
article
  .header
    .date
      nuxt-link(:to='uri') {{publishedAt}}
    h1
      nuxt-link(:to='uri') {{title}}
    Tags(:tags='tags')
  slot
</template>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

article {
  margin: 2em 1em;
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
    title() {
      return this.article.title;
    },
    tags() {
      return this.article.tags;
    },
    publishedAt() {
      const date = new Date(this.article.publishedAt);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    uri() {
      const name = this.article.base.replace(/\.json$/, '');
      return `/posts/${name}`;
    },
  },
};
</script>
