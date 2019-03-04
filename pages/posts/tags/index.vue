<template lang="pug">
.wrapper
  Header
  main
    Tags(:tags='tags')
</template>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

.tags {
  margin: 2em 0em;
  padding: 1em 2em;
  background: $base;
  font-weight: 300;
  filter: drop-shadow(6px 6px 0px $shadow);
}
</style>

<script>
import Header from '~/components/posts/header';
import Tags from '~/components/posts/tags';
import { getSummary } from '~/assets/js/posts/summary';

export default {
  components: {
    Header,
    Tags,
  },
  async asyncData() {
    const summary = await getSummary();
    const tags = summary
      .reduce((a, b) => [...a, ...b.tags], [])
      .filter((x, i, tags) => tags.slice(0, i).indexOf(x) === -1)
      .sort((a, b) => a.localeCompare(b, {}, { sensitivity: 'base' }));

    return {
      tags,
    };
  },
};
</script>
