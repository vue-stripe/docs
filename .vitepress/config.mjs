import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Stripe 💳",
  description: "The official partner Stripe component library for Vue.js",
  head: [
    [
      'link', 
      { rel: 'icon', href: '/favicon.ico' }
    ]
  ],
  themeConfig: {
    lastUpdated: true,

    search: {
      provider: 'local'
    },

    carbonAds: {
      code: 'CEBIEK3Y',
      placement: 'vuestripecom'
    },


    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'OSSPH', link: 'https://ossph.org' },
      // { text: 'Twitter', link: 'https://twitter.com/jrtiquez' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Vue Stripe', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Vue Stripe', link: '/components/vue-stripe' },
          { text: 'Elements', link: '/components/elements' }
        ]
      },
      {
        text: 'Composables',
        items: [
          { text: 'useStripe', link: '/composables/use-stripe' },
        ]
      },
      {
        text: 'Vue 2 Support',
        items: [
          { text: 'Intro', link: '/vue-2/introduction' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://twitter.com/jrtiquez' },
      { icon: 'github', link: 'https://github.com/vue-stripe' },
    ],

    footer: {
      copyright: 'Copyright © 2016 - present Joff Tiquez',
      message: 'Released under the MIT License.',
    },

    editLink: {
      pattern: 'https://github.com/vue-stripe/docs/edit/main/:path',
      text: 'Suggest changes',
    },
  }
})
