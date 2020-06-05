import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage
    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: StaticPage.title }} />
        <div dangerouslySetInnerHTML={{ __html: StaticPage.content }} />
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`