<template lang="pug">
.profile
  img.icon(src='https://github.com/NagayamaRyoga.png')
  h1 NagayamaRyoga

  ul
    li
      font-awesome-icon(:icon="['fas', 'map-marker-alt']")
      |  Kyoto, Japan
    li
      font-awesome-icon(:icon="['fas', 'university']")
      |  Kyoto Institute of Technology
    li
      font-awesome-icon(:icon="['fas', 'flask']")
      |  Information Security

  hr

  .links
    a(href='https://github.com/NagayamaRyoga')
      font-awesome-icon(:icon="['fab', 'github']")
    a(href='https://git.sec.is.kit.ac.jp/nagayama15')
      font-awesome-icon(:icon="['fab', 'gitlab']")
    a(href='https://nagayamaryoga.github.io/study_meeting')
      font-awesome-icon(:icon="['fas', 'folder-open']")
    a(:href='mailLinkAddress')
      font-awesome-icon(:icon="['fas', 'envelope']")
</template>

<style lang="scss" scoped>
@import '~/assets/scss/theme.scss';

.profile {
  position: relative;
  margin: 1rem auto;
  padding: 1rem 1rem;
  width: 20rem;
  text-align: center;
  box-sizing: border-box;
  background: $base;
  border: solid 1px $accent;
  border-radius: 1rem;
  filter: drop-shadow(4px 4px 0px rgba($accent, 0.3));

  ul {
    list-style-type: none;
    padding-left: 0px;
    color: $lighter;
  }
}

.icon {
  display: block;
  $size: 10rem;
  margin: 1rem auto;
  width: $size;
  height: $size;
  border-radius: 10%;
  filter: drop-shadow(2px 2px 0px rgba($accent, 0.3));
}

h1 {
  margin-block-start: 0.2em;
  margin-block-end: 0.2em;
  padding-block-start: 0.2em;
  padding-block-end: 0.2em;
  font-size: 2em;
  font-weight: normal;
}

.links {
  text-align: center;

  a {
    $size: 32px;
    display: inline-block;
    margin: 8px 12px;
    padding: 20px 20px;
    width: $size;
    height: $size;
    line-height: $size;
    font-size: $size;
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
}
</style>

<script>
const mailTo = 'bWFpbHRv';
const mailAddress = 'bmFnYXlhbWExNUBzZWMuaXMua2l0LmFjLmpw';

export default {
  data() {
    return {
      mailLinkAddress: '#',
    };
  },

  mounted() {
    this.mailLinkAddress = process.client
      ? `${window.atob(mailTo)}: ${window.atob(mailAddress)}`
      : '#';
  },
};
</script>
