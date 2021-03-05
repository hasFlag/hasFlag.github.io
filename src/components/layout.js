import * as React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/" aria-label="Spread Knowledge">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <span className="toggle-theme-wrapper">
              <label>
                <input
                  type="checkbox"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                />{' '}
                Dark mode
              </label>
            </span>
          )}
        </ThemeToggler>
      </header>
      <main>{children}</main>
      <footer>
        <ul>
          <li>
            <a href="https://twitter.com/gsin11">twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gsin11/">linkedin</a>
          </li>
          <li>
            <a href="https://github.com/gsin11">github</a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/2439056/gurpreet-singh">stack overflow</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Layout
