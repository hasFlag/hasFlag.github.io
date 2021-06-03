import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { CookieBanner } from "../components/cookieBanner"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <SEO title="About" />
        <Bio />
      </Layout>
      <CookieBanner />
    </>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`