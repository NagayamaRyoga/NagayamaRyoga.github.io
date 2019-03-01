<template lang="pug">
.profile
  img.icon(src='https://github.com/NagayamaRyoga.png' alt)
  h1 Nagayama Ryoga

  ul
    li
      font-awesome-icon(:icon='["fas", "map-marker-alt"]')
      |  Kyoto, Japan
    li
      font-awesome-icon(:icon='["fas", "university"]')
      |  Kyoto Institute of Technology
    li
      font-awesome-icon(:icon='["fas", "flask"]')
      |  Information Security Lab

  hr

  .links
    LinkButton.link(title='GitHub' linkTo='https://github.com/NagayamaRyoga' :icon='["fab", "github"]')
    LinkButton.link(title='GitLab' linkTo='https://git.sec.is.kit.ac.jp/nagayama15' :icon='["fab", "gitlab"]')
    LinkButton.link(title='Documents' linkTo='https://github.com/NagayamaRyoga' :icon='["fas", "folder-open"]')
    LinkButton.link(title='E-mail' :linkTo='mailLink' :icon='["fas", "envelope"]')

  hr

  h2
    font-awesome-icon(:icon="['fas', 'heart']")
    |  Favorite
  ul
    li C++
    li Dlang
    li Rust
    li Compiler

  hr

  h2
    font-awesome-icon(:icon="['fas', 'wrench']")
    |  Skills
  ul
    li LLVM
    li Web frontend
    li iOS application
    li Digital watermarking
</template>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

.profile {
  position: relative;
  margin: 1rem auto;
  padding: 1.5rem 1rem;
  width: 20rem;
  text-align: center;
  background: $base;
  border-radius: 1rem;
  filter: drop-shadow(6px 6px 0px rgba($accent, 0.3));
}

.icon {
  display: block;
  $size: 10rem;
  margin: 1rem auto;
  width: $size;
  height: $size;
  border-radius: 10%;
  filter: drop-shadow(3px 3px 0px rgba($accent, 0.3));
}

ul {
  list-style-type: none;
  margin: 0.5em 0;
  padding-left: 0px;
  color: $lighter;

  li {
    line-height: 200%;
  }
}

h1 {
  margin-block-start: 0.2em;
  margin-block-end: 0.2em;
  padding-block-start: 0.2em;
  padding-block-end: 0.2em;
  font-size: 2em;
  font-weight: normal;
  color: $accent;
}

h2 {
  margin-block-start: 0.1em;
  margin-block-end: 0.1em;
  padding-block-start: 0.1em;
  padding-block-end: 0.1em;
  font-size: 2em;
  font-weight: normal;
  color: $accent;
}

.links {
  padding: 0 1em;
  text-align: center;
  font-size: 2em;

  .link {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
}
</style>

<script>
import LinkButton from '~/components/link-button';

const mailTo = 'bWFpbHRv';
const mailAddress = 'bmFnYXlhbWExNUBzZWMuaXMua2l0LmFjLmpw';

export default {
  components: {
    LinkButton,
  },

  data() {
    return {
      mailTo: '',
      mailAddress: '',
    };
  },

  computed: {
    mailLink() {
      return `${this.mailTo}: ${this.mailAddress}`;
    },
  },

  mounted() {
    if (process.client) {
      this.mailTo = window.atob(mailTo);
      this.mailAddress = window.atob(mailAddress);
    }
  },
};
</script>
