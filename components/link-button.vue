<template lang="pug">
a(:title='title' :href='linkTo')
  font-awesome-icon(:icon='icon')
</template>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

a {
  display: inline-block;
  margin: 0.25em 0.25em;
  padding: 0.625em 0.625em;
  width: 1em;
  height: 1em;
  line-height: 1em;
  font-size: 1em;
  text-decoration: none;
  color: $base;
  background: $main;
  border-radius: 50%;
  transform: rotate(0turn);
  transition: all 0.4s ease;

  &:active,
  &:hover,
  &:focus {
    background-color: $accent;
    transform: rotate(1turn);
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    linkTo: {
      type: String,
      required: true,
    },
    icon: {
      type: [Object, Array, String],
      required: true,
    },
  },
};
</script>
