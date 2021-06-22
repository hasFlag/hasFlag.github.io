import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CookieBanner } from "../components/cookieBanner"

const Posts = React.lazy(() => import("../components/posts"))
const Projects = React.lazy(() => import("../components/projects"))

const PROJECTS = [
  {
    id: 1,
    label: "Github Jobs",
    link: "https://github-jobs-peach.vercel.app/",
  },
  {
    id: 2,
    label: "ReactJS TailwindCSS Components",
    link: "https://reactjs-tailwindcss.vercel.app/",
  },
  {
    id: 3,
    label: "EGGCELLENT",
    link: "https://gs-strapi-fe.vercel.app/",
  },
  {
    id: 4,
    label: "THE PLANET",
    link: "https://the-planet.vercel.app/",
  },
]

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const isSSR = typeof window === "undefined"

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <SEO title="Gurpreet Singh" />
        <Bio />
        <section className="segment">
          <div className="has-border">
            <h2>Latest Posts</h2>
            <Link to="/blog">All posts</Link>
          </div>
          <div>
            {!isSSR && (
              <React.Suspense fallback={<div>Loading...</div>}>
                <Posts isHomepage posts={posts} limit={5} />
              </React.Suspense>
            )}
          </div>
        </section>
        <section className="segment">
          <div className="has-border">
            <h2>Latest Projects</h2>
          </div>
          <div>
            {!isSSR && (
              <React.Suspense fallback={<div>Loading...</div>}>
                <Projects projects={PROJECTS} />
              </React.Suspense>
            )}
          </div>
        </section>
      </Layout>
      <CookieBanner />
    </>
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
