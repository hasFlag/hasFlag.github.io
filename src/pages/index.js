import React from "react"
import { graphql, } from "gatsby";
import Layout from '../components/layout';

export default function Home({ data }) {
  const page = data.wordpressPage;
  return <Layout>
    <h1>{page.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: page.content }} />
  </Layout>
}

export const query = graphql`
  query {
    wordpressPage(slug: {eq: "home-page"}) {
      id
      slug
      template
      title
      content
    }
  }
`;
