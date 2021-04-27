/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title, ogType = 'website', ogImage = "", slug }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            canonicalUrl
            author {
              name
              summary
            }
            social {
              twitter
            }
            googleVerificationId
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const ogSiteName = `${site.siteMetadata.author.name} - ${site.siteMetadata.author.summary}`
  const ogUrl = site.siteMetadata.siteUrl
  let helmetLinks = []
  if (slug) {
    helmetLinks.push({
      rel: `canonical`,
      href: site.siteMetadata?.canonicalUrl + slug,
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s - ${defaultTitle}` : null}
      link={helmetLinks}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        /* Open Graph */
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: ogType,
        },
        {
          property: `og:url`,
          content: ogUrl,
        },
        {
          property: `og:author`,
          content: site.siteMetadata.author.name,
        },
        {
          property: `og:site_name`,
          content: ogSiteName,
        },
        {
          property: `og:image`,
          content: ogUrl + ogImage,
        },
        /* twitter */
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: `@${site.siteMetadata?.social?.twitter}` || ``,
        },
        {
          name: `twitter:creator`,
          content: `@${site.siteMetadata?.social?.twitter}` || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: ogUrl + ogImage,
        },
        {
          name: `google-site-verification`,
          content: site.siteMetadata?.googleVerificationId,
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
