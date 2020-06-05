/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: "Gurpreet Singh's Blog",
    author: "Gurpreet Singh",
    description: "This is my blog",
    siteUrl: "https://www.gatsbyjs.org/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/gatsbyjs",
      },
      {
        name: "github",
        url: "https://github.com/gatsbyjs",
      },
    ],
  },
  plugins: [
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from WordPress.
     */
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "local.loc",
        protocol: "http",
        restApiRoutePrefix: "index.php/wp-json",
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "http://local.loc/",
          replacementUrl: "http://localhost:8000/",
        },
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        excludedRoutes: ["**/posts/1456"],
        keepMediaSizes: false,
        normalizer: function ({ entities }) {
          return entities
        },
        normalizers: normalizers => [
          ...normalizers,
          {
            name: "nameOfTheFunction",
            normalizer: function ({ entities }) {
              // manipulate entities here
              return entities
            },
          },
        ],
      },
    },
  ],
}
