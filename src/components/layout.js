import React from 'react';
import { Link, useStaticQuery, graphql, } from 'gatsby';

const ListLink = props => {
  return <li style={{ display: `inline-block`, marginRight: `1rem` }}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
}

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return (<div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>{site.siteMetadata.title}</h3>
      </Link>
      <p>{site.siteMetadata.description}</p>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/privacy-policy">Privacy Policy</ListLink>
      </ul>
    </header>
    {children}
  </div>)
};

export default Layout;
