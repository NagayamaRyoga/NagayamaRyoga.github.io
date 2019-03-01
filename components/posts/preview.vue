<template lang="pug">
article
  .header
    .date
      nuxt-link(:to='uri') {{publishedAt}}
    h1
      nuxt-link(:to='uri') {{title}}
    ul.tags
      li(v-for='tag in article.tags')
        nuxt-link(:to='`?tag=${tag}`')
          font-awesome-icon(:icon='["fas", "tag"]')
          |  {{tag}}
  .body {{article.preview}}
  .footer
    nuxt-link.button(:to='uri') 続きを読む
</template>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

article {
  margin: 2em 1em;
  padding: 1em 2em;
  background: $base;
  filter: drop-shadow(4px 4px 0px $shadow);
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

  .tags {
    display: block;
    list-style-type: none;
    margin: 0.4em 0em;
    padding: 0em;
    font-size: 0.8em;

    li {
      display: inline-block;
      margin-right: 1em;
      color: $accent;
      font-weight: bolder;
    }

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
export default {
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
    publishedAt() {
      const date = new Date(this.article.publishedAt);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    uri() {
      return this.article.base.replace(/\.json$/, '');
    },
  },
};
</script>
