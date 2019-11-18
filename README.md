Welcome to nukopy's Wiki.

## Description

This repository is built with GatsbyJS, a fast modern site generator based on ReactJS, and GatsbyJS starter which is a template project built with GatsbyJS.

## Quickstart

Get started by running the following commands:

```
$ git clone git@github.com:nukopy/wiki.git
$ yarn install
$ yarn start
```

Visit `http://localhost:8000/` to view the app.

## 🔧 Configure

Write markdown files in `content` folder.

Open `config.js` for templating variables. Broadly configuration is available for `gatsby`, `header`, `sidebar` and `siteMetadata`.

- `gatsby` config for global configuration like

  - `pathPrefix` - Gatsby Path Prefix
  - `siteUrl` - Gatsby Site URL
  - `gaTrackingId` - Google Analytics Tracking ID

- `header` config for site header configuration like

  - `title` - The title that appears on the top left
  - `githubUrl` - The Github URL for the docs website
  - `helpUrl` - Help URL for pointing to resources
  - `tweetText` - Tweet text
  - `links` - Links on the top right
  - `search` - Enable search and [configure Algolia](https://www.gatsbyjs.org/docs/adding-search-with-algolia/)

- `sidebar` config for navigation links configuration

  - `forcedNavOrder` for left sidebar navigation order. It should be in the format "/<filename>"
  - `frontLine` - whether to show a front line at the beginning of a nested menu.(Collapsing capability would be turned of if this option is set to true)
  - `links` - Links on the bottom left of the sidebar
  - `ignoreIndex` - Set this to true if the index.md file shouldn't appear on the left sidebar navigation. Typically this can be used for landing pages.

- `siteMetadata` config for website related configuration

  - `title` - Title of the website
  - `description` - Description of the website
  - `ogImage` - Social Media share og:image tag
  - `docsLocation` - The Github URL for Edit on Github

- For sub nesting in left sidebar, create a folder with the same name as the top level `.md` filename and the sub navigation is auto-generated. The sub navigation is alphabetically ordered.

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hasura/gatsby-gitbook-starter)
