import { defaultTheme } from '@vuepress/theme-default';
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { getDirname, path } from '@vuepress/utils';
import { defineUserConfig } from 'vuepress';

const __dirname = getDirname(import.meta.url)


export default defineUserConfig({
  title: 'Vue Stripe',
  description: 'Stripe Checkout & Elements for Vue.js',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  theme: defaultTheme({
    colorMode: 'dark',
    home: '/',
    navbar: [
      {
        text: 'Guide',
        link: '/guide/'
      },
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
    docsRepo: 'https://github.com/vue-stripe/docs',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/tree/:branch/:path',
    locales: {
      '/': {
        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              children: [
                '/guide/README.md',
                '/guide/getting-started.md',
                '/guide/checkout.md',
                // '/guide/page.md',
                // '/guide/markdown.md',
                // '/guide/assets.md',
                // '/guide/i18n.md',
                // '/guide/deployment.md',
                // '/guide/theme.md',
                // '/guide/plugin.md',
                // '/guide/bundler.md',
                // '/guide/migration.md',
              ],
            },
          ]
        }
      }
    }
  }),
  plugins: [
    backToTopPlugin(),
    docsearchPlugin({
      appId: '<APP_ID>',
      apiKey: '<API_KEY>'
    }),
  ],
  alias: {
    '@theme/HomeFooter.vue': path.resolve(__dirname, './components/HomeFooter.vue'),
    // '@theme/NavbarBrand.vue': path.resolve(__dirname, './components/VueStripeLogo.vue'),
  },

});