import * as React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const ToggleMode = () => <ThemeToggler>
  {({ theme, toggleTheme }) => {
    if (theme === null) {
      return null
    }
    return (<button
      type="button"
      data-theme={theme}
      aria-label="Switch between Dark and Light mode"
      title="Switch between Dark and Light mode"
      className="toggleMode"
      onClick={e => toggleTheme(e.target.dataset.theme === 'dark' ? 'light' : 'dark')}
    >
      <div></div>
    </button>)
  }}
</ThemeToggler >

export default ToggleMode