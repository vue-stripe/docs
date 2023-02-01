export const themeData = JSON.parse("{\"colorMode\":\"dark\",\"home\":\"/\",\"navbar\":[{\"text\":\"Guide\",\"link\":\"/guide/\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/vue-stripe\"},{\"text\":\"OSSPH\",\"link\":\"https://ossph.org\"},{\"text\":\"Twitter\",\"link\":\"https://twitter.com/jrtiquez\"}],\"docsRepo\":\"https://github.com/vue-stripe/docs\",\"docsBranch\":\"main\",\"docsDir\":\"docs\",\"editLinkPattern\":\":repo/tree/:branch/:path\",\"locales\":{\"/\":{\"sidebar\":{\"/guide/\":[{\"text\":\"Guide\",\"children\":[\"/guide/README.md\",\"/guide/getting-started.md\",\"/guide/checkout.md\"]}]},\"selectLanguageName\":\"English\"}},\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
