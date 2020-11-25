<template lang="pug">
Link(:title='title' :to='to')
  font-awesome-icon(:icon='icon')
</template>

<script>
import Link from '~/components/better-link';

export default {
  components: {
    Link,
  },
  props: {
    to: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    icon: {
      type: [Object, Array, String],
      required: true,
    },
  },
};
</script>

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
