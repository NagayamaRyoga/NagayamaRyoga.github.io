<template lang="pug">
main.profile
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
    LinkButton.link(title='GitHub' to='https://github.com/NagayamaRyoga' :icon='["fab", "github"]')
    LinkButton.link(title='GitLab' to='https://git.sec.is.kit.ac.jp/nagayama15' :icon='["fab", "gitlab"]')
    LinkButton.link(title='Blog' to='/posts' :icon='["fas", "book-open"]')
    LinkButton.link(title='Documents' to='https://nagayamaryoga.github.io/study' :icon='["fas", "folder-open"]')
    LinkButton.link(title='E-mail' :to='mailLink' :icon='["fas", "envelope"]')

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
  filter: drop-shadow(6px 6px 0px $shadow);
}

.icon {
  display: block;
  $size: 10rem;
  margin: 1rem auto;
  width: $size;
  height: $size;
  border-radius: 10%;
  filter: drop-shadow(3px 3px 0px $shadow);
}

ul {
  list-style-type: none;
  margin: 0.5em 0;
  padding-left: 0px;
  color: $main;

  li {
    line-height: 200%;
  }
}

.links {
  padding: 0 0.5em;
  text-align: center;
  font-size: 2em;
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
