// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-page-js": () => import("./../src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-post-js": () => import("./../src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */)
}

