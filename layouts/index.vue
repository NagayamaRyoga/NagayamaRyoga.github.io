<template lang="pug">
  Nuxt
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:100,300');

@import '~/assets/scss/theme.scss';

html,
body {
  height: 100%;
  margin: 0px;
}

html {
  color: $main;
  background-color: $background;
  font-size: 16px;
  font-family: 'Noto Sans JP', sans-serif;
}

h1 {
  margin-block-start: 0.2em;
  margin-block-end: 0.2em;
  padding-block-start: 0.2em;
  padding-block-end: 0.2em;
  font-size: 2em;
  font-weight: 100;
  color: $accent;
}

h2 {
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  padding-block-start: 0.1em;
  padding-block-end: 0.1em;
  font-size: 1.5em;
  font-weight: 100;
  color: $accent;
}

hr {
  margin: 1.5em 0;
  height: 1px;
  background-color: $accent;
  border: none;
  filter: drop-shadow(1px 1px 0px rgba($accent, 0.3));
}
</style>
