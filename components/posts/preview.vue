<template lang="pug">
article
  .header
    .date
      nuxt-link(:to='uri') {{publishedAt}}
    h1
      nuxt-link(:to='uri') {{title}}
    Tags(:tags='tags')
  .body {{preview}}
  .footer
    nuxt-link.button(:to='uri') 続きを読む
</template>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

article {
  margin: 2em 1em;
  padding: 1em 2em;
  background: $base;
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
    font-weight: 100;
    border-block-end: solid 1px $accent;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}

.body {
  padding: 0.5em 0.5em;
  font-weight: 300;

  &::after {
    content: ' ……';
  }
}

.footer {
  padding: 0.5em 1em;
  text-align: center;

  .button {
    padding: 0.2em 2em;
    box-sizing: border-box;
    line-height: 2em;
    font-weight: bolder;
    text-decoration: none;
    color: $accent;
    background: $base;
    border: solid 1px $accent;
    border-radius: 1em;
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
    preview() {
      return this.article.preview;
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
