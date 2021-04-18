import * as React from "react"
import { Link } from "gatsby"

import trackEvent from './gtag'

const Posts = ({ posts, isHomepage, limit }) => {
  const noOfPosts = limit || posts.length;

  return <ol style={{ listStyle: `none` }}>
    {posts.slice(0, noOfPosts).map(post => {
      const title = post.frontmatter.title || post.fields.slug

      return (
        <li key={post.fields.slug}>
          <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              {isHomepage && <Link to={post.fields.slug} itemProp="url" onClick={(e) => trackEvent(e)}>
                <span itemProp="headline">{title}</span>
              </Link>}
              {!isHomepage && <h2>
                <Link to={post.fields.slug} itemProp="url" onClick={(e) => trackEvent(e)}>
                  <span itemProp="headline">{title}</span>
                </Link>
              </h2>}
              <p>
                <time itemProp="datePublished">{post.frontmatter.date}</time>
                <small>
                  {" - "}
                  {post.frontmatter.tags.map((tag, index) => {
                    return <>{(index ? ', ' : '')}<Link key={`tag_${index}`} to={`/tags/${tag}`} title={`click to visit ${tag} tag`}>{tag}</Link></>
                  })}
                  {" - "}
                  {post.fields.readingTime.text}
                </small>
              </p>
            </header>
          </article>
        </li>
      )
    })}
  </ol>
}

export default Posts