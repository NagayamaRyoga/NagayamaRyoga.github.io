<template lang="pug">
header
  .container
    .site-title
      nuxt-link(to='/posts') 有限猿定理
    ul.links
      li
        nuxt-link(to='/')
          font-awesome-icon(:icon='["fas", "user"]')
          |  About
      li
        a(href='https://github.com/NagayamaRyoga')
          font-awesome-icon(:icon='["fab", "github"]')
          |  GitHub
</template>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

.container {
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0em;
  padding: 0.5em 2em;
  background: $base;
  filter: drop-shadow(6px 6px 0px $shadow);
}

.site-title {
  display: block;
  font-size: 1.6em;
  font-weight: 100;

  a {
    color: $accent;
    text-decoration: none;
  }
}

.links {
  display: block;
  list-style-type: none;
  margin: 0em 0em;
  padding: 0.2em 0em;
  font-size: 1.2em;
  font-weight: 100;
  text-align: right;

  li {
    display: inline-block;
    margin-left: 1em;
  }

  a {
    color: $accent;
    text-decoration: none;
  }
}

@media (max-width: 442px) {
  .site-title {
    font-size: 1.2em;
  }

  .links {
    font-size: 0.8em;
  }
}
</style>

<script>
export default {};
</script>
