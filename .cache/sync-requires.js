const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/gursingh7/Documents/Personal/Repos/gsin11.github.io/src/pages/index.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/gursingh7/Documents/Personal/Repos/gsin11.github.io/src/templates/page.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/gursingh7/Documents/Personal/Repos/gsin11.github.io/src/templates/post.js")))
}

