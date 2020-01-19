const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://nukopy.com",
    gaTrackingId: null
  },
  header: {
    logo: "https://avatars3.githubusercontent.com/u/42367320?s=460&v=4",
    logoLink: "https://github.com/nukopy/wiki/",
    title: "nukopy's Wiki",
    githubUrl: "https://github.com/nukopy/",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: [
      "/Home",
      "/Languages",
      "/Database",
      "/DevelopmentEnvironment",
      "/Web",
      "/Git",
      "/TechnicalTerms",
      "/Platforms",
      "/Tips",
    ],
    links: [{ text: "nukopy", link: "https://github.com/nukopy/" }],
    frontline: false,
    ignoreIndex: false
  },
  siteMetadata: {
    title: "nukopy's Wiki",
    description: "Wiki built with mdx, GatsbyJS.",
    ogImage: "https://avatars3.githubusercontent.com/u/42367320?s=460&v=4",
    docsLocation: "https://github.com/nukopy/wiki",
    favicon: "https://avatars3.githubusercontent.com/u/42367320?s=460&v=4"
  }
};

module.exports = config;
