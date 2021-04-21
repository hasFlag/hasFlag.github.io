import * as React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
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
            <OutboundLink href="https://twitter.com/gsin11">Twitter</OutboundLink>
            <OutboundLink href="https://www.linkedin.com/in/gsin11/">Linkedin</OutboundLink>
            <OutboundLink href="https://github.com/gsin11">GitHub</OutboundLink>
            <OutboundLink href="https://www.buymeacoffee.com/gsin" target="blank"><strong>Buy me a <span role="img" aria-label="coffee">☕️</span></strong></OutboundLink>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <ul>
          <li>
            <OutboundLink href="https://twitter.com/gsin11">Twitter</OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://www.linkedin.com/in/gsin11/">Linkedin</OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://github.com/gsin11">GitHub</OutboundLink>
          </li>
          <li>
            <Link to="/cookie-policy">Cookie Policy</Link>
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
