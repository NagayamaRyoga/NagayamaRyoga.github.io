import { sourceFileArray, fileMap } from './static/posts/summary.json';

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/',
        },
      }
    : {};

const postRoutes = sourceFileArray.map(x =>
  x.replace(/^\.\/posts\/(.+)\.md$/, '/posts/$1')
);

const tagRoutes = Object.values(fileMap)
  .reduce((a, b) => [...a, ...b.tags], [])
  .filter((x, i, a) => a.slice(0, i).indexOf(x) === -1);

const dynamicRoutes = [...postRoutes, ...tagRoutes];

module.exports = {
  ...routerBase,
  head: {
    title: 'Nagayama Ryoga',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: "Nagayama Ryoga's web site.",
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'NagayamaRyoga',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://nagayamaryoga.github.io/',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'NagayamaRyoga',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://github.com/NagayamaRyoga.png',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: "Nagayama Ryoga's web site.",
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: 'ja_JP',
      },
    ],
  },
  css: ['~/assets/scss/global.scss'],
  modules: ['nuxt-fontawesome'],
  generate: {
    routes: [...dynamicRoutes],
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },
};
