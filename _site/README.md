# Portfolio

My portfolio on GitHub Pages

## Tech stack

* **Static site generator:** [Jekyll](https://jekyllrb.com/)
* **Configuration:** [GitHub Pages Gem](https://github.com/github/pages-gem)
* **HTML/CSS framework:** [HTML5 Boilerplate](https://html5boilerplate.com/)
* **Favicons:** [Real Favicon Generator](https://realfavicongenerator.net/)
* **Iconfont:** [Fontello](http://fontello.com/)
* **Masonry layout helper:** [Masonry](https://github.com/desandro/masonry)
* **Image preloader:** [Images Loaded](https://github.com/desandro/imagesloaded)

## Install Jekyll

Follow the [official Jekyll documentation](https://jekyllrb.com/docs/installation/macos/) for the installation.

Be careful to read it first, so you install the bundler and Jekyll gems in your home directory instead of `usr/local/bin`. Before executing gem install bundler jekyll you should add a local gem directory to `.bash_profile` file. If you do not install gems in your home directory, your bash cannot find the jekyll executable.

```bash
# Install gems in home directory
export GEM_HOME=$HOME/Gems
export PATH=$HOME/Gems/bin:$PATH
```

Note: If you run `bundler update` for the first time you might run into an error. That`s because you are using a newer version of bundler than is required by the gemlock file. Just follow the instructions of the error message on how to install the older bundler version.

## Useful Jekyll commands

Serve your site locally
```bash
bundle exec jekyll serve
```

Serve your site on your local network
```bash
bundle exec jekyll serve --host=0.0.0.0;5B
```

If you set a baseurl, serve your site locally without `baseurl` messing up your links.
```bash
bundle exec jekyll serve --baseurl ''
```

Update your gems often, to receive the latest GitHub Pages gem.
```bash
bundle update
```