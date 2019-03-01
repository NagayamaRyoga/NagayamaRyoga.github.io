<template lang="pug">
a(v-if='/^https?:/.test(to)' :href='to' :title='title')
  slot
nuxt-link(v-else :to='to' :title='title')
  slot
</template>

<script>
export default {
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
  },
};
</script>
