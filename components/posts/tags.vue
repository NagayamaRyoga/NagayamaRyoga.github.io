<template lang="pug">
ul.tags
  li(v-for='tag in tags' :key='tag')
    nuxt-link(:to='`/posts?tag=${tag}`')
      font-awesome-icon(:icon='["fas", "tag"]')
      |  {{tag}}
</template>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

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
</style>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>
