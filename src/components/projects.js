import * as React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Projects = ({ projects }) => {
  return <ol style={{ listStyle: `none` }}>
    {projects.map(project => {
      return (
        <li key={project.id}>
          <article
            className="post-list-item"
          >
            <header>
              <OutboundLink href={project.link} target="_blank" className="external">
                <span>{project.label}</span>
              </OutboundLink>
            </header>
          </article>
        </li>
      )
    })}
  </ol>
}

export default Projects