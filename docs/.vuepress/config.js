import { defaultTheme } from '@vuepress/theme-default';
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

module.exports = {
  title: 'Vue Stripe',
  description: 'Collection of Vue.js components, plugins, and composables for Stripe.js',
  theme: defaultTheme({
    colorMode: 'dark',
    home: '/',
    navbar: [
      {
        text: 'GitHub',
        link: 'https://github.com/vue-stripe',
      },
      {
        text: 'OSSPH',
        link: 'https://ossph.org',
      },
      {
        text: 'Twitter',
        link: 'https://twitter.com/jrtiquez',
      }
    ],
  }),
  plugins: [
    backToTopPlugin(),
    docsearchPlugin({
      appId: '<APP_ID>',
      apiKey: '<API_KEY>'
    }),

  ],
};