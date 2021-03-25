import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Posts = React.lazy(() => import('../components/posts'));

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const isSSR = typeof window === "undefined"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Gurpreet Singh" />
      <Bio />
      <section className="segment">
        <div className="has-border">
          <h2>Latest Posts</h2>
          <Link to="/blog">All posts</Link>
        </div>
        <div>
          {!isSSR &&
            <React.Suspense fallback={<div>Loading...</div>}>
              <Posts isHomepage posts={posts} limit={5} />
            </React.Suspense>
          }
        </div>
      </section>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
          readingTime {
            text
          }
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
          description
        }
      }
    }
  }
`
