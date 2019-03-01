import { sourceFileArray } from './static/posts/summary.json';

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/',
        },
      }
    : {};

const dynamicRoutes = sourceFileArray.map(x =>
  x.replace(/^\.\/posts\/(.+)\.md$/, '/posts/$1')
);

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
