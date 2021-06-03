import * as React from "react"
import { Link, graphql } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {CookieBanner} from "../components/cookieBanner"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}, location) => (
  <>
    <Layout location={location} title={title}>
      <SEO title="All tags" />
      <div>
        <section className="segment">
          <div>
            <h2>Tags</h2>
          </div>
        </section>
        <div>
          <ol style={{ listStyle: `none` }}>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
              </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Layout>
    <CookieBanner />
  </>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`