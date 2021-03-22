import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Gurpreet Singh" />
      <Bio />
      <section className="segment">
        <div>
          <h2>Latest Posts</h2>
          <Link to="/blog">All posts</Link>
        </div>
        <div>
          <ol style={{ listStyle: `none` }}>
            {posts.slice(0, 5).map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li key={post.fields.slug} itemScope
                  itemType="http://schema.org/Article">
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                  <p><time itemProp="datePublished">{post.frontmatter.date}</time><small><span aria-hidden="true"> - ⏱ </span>{post.fields.readingTime.text}</small></p>
                </li>
              )
            })}
          </ol>
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
          description
        }
      }
    }
  }
`
