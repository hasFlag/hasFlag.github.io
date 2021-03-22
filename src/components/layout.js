import * as React from "react"
import { Link } from "gatsby"
import ToggleMode from "./toggleMode"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const isActive = (slug) => {
    var re = new RegExp(slug, 'gi')
    return re.test(location.pathname) ? "active" : ""
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <div>
          <h1 className="main-heading">
            <Link to="/" aria-label="Spread Knowledge">{title}</Link>
          </h1>
          <ToggleMode />
        </div>
        <div className="has-border">
          <nav>
            <Link to="/blog" className={isActive('blog')}>Blog</Link>
            <Link to="/about" className={isActive('about')}>About</Link>
          </nav>
          <nav>
            <a href="https://twitter.com/gsin11">Twitter</a>
            <a href="https://www.linkedin.com/in/gsin11/">Linkedin</a>
            <a href="https://github.com/gsin11">GitHub</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <ul>
          <li>
            <a href="https://twitter.com/gsin11">Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gsin11/">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/gsin11">GitHub</a>
          </li>
          <li>
            <a href="/rss.xml">rss</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Layout
