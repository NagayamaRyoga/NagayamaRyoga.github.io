<template lang="pug">
.profile
  img.icon(src="https://github.com/NagayamaRyoga.png")
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
</template>

<style lang="scss" scoped>
@import "~/assets/scss/theme.scss";

.profile {
  position: relative;
  margin: 1rem auto;
  padding: 1rem 1rem;
  width: 20rem;
  text-align: center;
  box-sizing: border-box;
  background: $base;
  border: solid 1px $accent;
  border-radius: 4%;

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
    margin: $size * 0.2;
    padding: $size * 0.6;
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
    }
  }
}
</style>

<script>
export default {};
</script>
