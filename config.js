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
      "/Architecture",
      "/Languages",
      "/Database",
      "/DevelopmentEnvironment",
      "/Web",
      "/Git",
      "/TechnicalTerms",
      "/Platforms",
      "/IDE",
      "/Tips"
    ],
    links: [{ text: "nukopy", link: "https://github.com/nukopy/" }],
    frontline: false,
    ignoreIndex: false
  },
  siteMetadata: {
    title: "nukopy's Wiki",
    description: "Wiki built with mdx, GatsbyJS.",
    ogImage:
      "https://nukopy-wiki.s3-ap-northeast-1.amazonaws.com/twitter_card.png",
    docsLocation: "https://github.com/nukopy/wiki",
    twitterCard:
      "https://nukopy-wiki.s3-ap-northeast-1.amazonaws.com/twitter_card.png",
    twitterCardLarge: "",
    favicon: "https://avatars3.githubusercontent.com/u/42367320?s=460&v=4"
  }
};

module.exports = config;
