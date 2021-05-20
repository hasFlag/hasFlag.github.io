/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

const Bio = () => {
  return (
    <section className="segment">
      <h2>Hi <span className="relative"><span role="img" className="waving-hand" aria-label="waving hand">👋</span></span></h2>
      <p>I'm Gurpreet Singh - I am a Front End Architect from India <span aria-hidden="true">🇮🇳</span> now living in Frankfurt <span aria-hidden="true">🇩🇪</span></p>
      <p>I have more than 10 years of experience in the area of JavaScript, HTML, CSS. My expertise are to work on full stack projects using NodeJS and ReactJS.</p>
      <ul>
        <li>Relevant experience in building and shipping awesome web experiences.</li>
        <li>Hands on experience on Docker, Azure and Heroku.</li>
        <li>Experience in deploying production grade apps on cloud.</li>
        <li>Leading front-end teams in projects spanning across B2B, B2C, Transportation & Mobility, Travel and Healthcare domains.</li>
        <li>Working on Agility, DevOps and CI/CD.</li>
        <li>Specialized knowledge on Web Performance and accessibility.</li>
        <li>Active contributor on GitHub and StackOverflow.</li>
        <li>Focus on full stack development.</li>
        <li>Implemented Micro-frontends for one of the leading clients.</li>
      </ul>
      <p>I love to capture landscapes, long exposures, and portraits as a hobby photographer.</p>
    </section>
  )
}

export default Bio
