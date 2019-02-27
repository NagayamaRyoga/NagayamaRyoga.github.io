module.exports = {
  modules: ["nuxt-fontawesome"],
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["fab"]
      },
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      }
    ]
  }
};
