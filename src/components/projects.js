import * as React from "react"

const Projects = ({ projects }) => {
  return <ol style={{ listStyle: `none` }}>
    {projects.map(project => {
      return (
        <li key={project.id}>
          <article
            className="post-list-item"
          >
            <header>
              <a href={project.link} target="_blank" className="external" rel="noreferrer">
                <span>{project.label}</span>
              </a>
            </header>
          </article>
        </li>
      )
    })}
  </ol>
}

export default Projects