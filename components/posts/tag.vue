<template lang="pug">
nuxt-link(:to='`/posts/tags/${encodeURIComponent(tag)}`')
  font-awesome-icon(:icon='["fas", "tag"]')
  |  {{tag}}
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
};
</script>
