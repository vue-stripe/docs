export const searchIndex = [
  {
    "title": "Installation",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Checkout",
    "headers": [],
    "path": "/checkout/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Elements",
    "headers": [],
    "path": "/elements/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Get Started",
    "headers": [],
    "path": "/get-started/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
