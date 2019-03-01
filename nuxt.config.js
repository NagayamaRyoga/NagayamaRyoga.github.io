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
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Nagayama Ryoga's web site.",
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
