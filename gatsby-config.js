require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
const queries = require("./src/utils/algolia");
const config = require("./config");
const plugins = [
  "gatsby-plugin-sitemap",
  "gatsby-plugin-sharp",
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/templates/docs.js`)
    }
  },
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 500,
            sizeByPixelDensity: false,
            linkImagesToOriginal: false,
            showCaptions: [`title`],
            wrapperStyle: fluidResult =>
              `margin-left: auto; margin-right: auto; max-width: ${fluidResult.presentationWidth}px;`
          }
        },
        {
          resolve: "gatsby-remark-copy-linked-files"
        }
      ],
      extensions: [".mdx", ".md"],

      // issue: https://github.com/gatsbyjs/gatsby/issues/15486
      // なんか良く分からんけど動くからヨシ！
      plugins: [`gatsby-remark-images`]
    }
  },
  "gatsby-plugin-emotion",
  "gatsby-plugin-remove-trailing-slashes",
  "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "docs",
      path: `${__dirname}/content/`
    }
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      // your google analytics tracking id
      trackingId: config.gatsby.gaTrackingId,
      // Puts tracking script in the head instead of the body
      head: true,
      // enable ip anonymization
      anonymize: false
    }
  },
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "GitHub",
      fieldName: "github",
      url: "https://api.github.com/graphql",
      // HTTP headers
      headers: {
        // Learn about environment variables: https://gatsby.dev/env-vars
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`
      },
      // Additional options to pass to node-fetch
      fetchOptions: {}
    }
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-mathjax`]
    }
  }
];
if (
  config.header.search &&
  config.header.search.enabled &&
  config.header.search.algoliaAppId &&
  config.header.search.algoliaAdminKey
) {
  plugins.push({
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: config.header.search.algoliaAppId, // algolia application id
      apiKey: config.header.search.algoliaAdminKey, // algolia admin key to index
      queries,
      chunkSize: 10000 // default: 1000
    }
  });
}
module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: config.siteMetadata.favicon,
    logo: {
      link: config.header.logoLink ? config.header.logoLink : "/",
      image: config.header.logo
    }, // backwards compatible
    headerTitle: config.header.title,
    githubUrl: config.header.githubUrl,
    helpUrl: config.header.helpUrl,
    tweetText: config.header.tweetText,
    headerLinks: config.header.links,
    siteUrl: config.gatsby.siteUrl
  },
  plugins: plugins
};
