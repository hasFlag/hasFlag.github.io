import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {CookieBanner} from "../components/cookieBanner"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { edges } = data.allMarkdownRemark

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <SEO title={tag} />
        <section className="segment">
          <div>
            <h2>{tag}</h2>
            <Link to="/tags">All tags</Link>
          </div>
          <div>
            <ol style={{ listStyle: `none` }}>
              {edges.map(({ node }) => {
                const { slug } = node.fields
                const { title, date } = node.frontmatter
                return (
                  <li key={slug}>
                    <Link to={slug}>{title}</Link>
                    <p><time>{date}</time></p>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>
      </Layout>
      <CookieBanner />
    </>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`