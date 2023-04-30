/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
const _ = require('lodash')
const routeConfig = require('../config/route')
// const { removeTrailingSlash } = require(`./remove-trailing-slash`)

/**
 * getRouteMatchPath
 * find page's match path base on provided route config
 * @param {*} pagePath
 * @param {*} routes
 */
function getRouteMatchPath(pagePath = '', routes = []) {
  if (pagePath === undefined || pagePath === '/') {
    return undefined
  }
  const route = _.find(routes, (o) => _.includes(pagePath, o.route))
  return route
}

exports.onCreatePage = ({
  page,
  actions,
}, pluginConfig) => {
  const {
    createPage,
    deletePage,
  } = actions

  // local variable
  const availableLocales = [0]

  return new Promise((resolve) => {
    deletePage(page)

    const pageRoute = getRouteMatchPath(page.path, routeConfig)

    availableLocales.map(() => {
      let localizedPath = `${page.path}`

      if (pageRoute) {
        localizedPath = `${pageRoute.route}`
        page.matchPath = `${pageRoute.matchPath}`
      }

      return createPage({

        ...page,
        path: localizedPath,

        context: {
          ...page.context,
          locale: null,
        },
      })
    })

    resolve()
  })
}
