import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import styled from "@emotion/styled";
import { injectGlobal } from "emotion";

import Link from "../components/link";
import Layout from "../components/layout";
import TableOfContents from "../components/myMdxComponents/TableOfContents";
import NextPrevious from "../components/NextPrevious";
import "../components/styles.css";
import config from "../../config";

const forcedNavOrder = config.sidebar.forcedNavOrder;

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Roboto",
      "Roboto Light",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";

    font-size: 16px;
  }

  a {
    transition: color 0.15s;
    color: #rgb(55, 122, 115);
  }
`;

const Edit = styled("div")`
  padding: 1rem 1.5rem;
  text-align: right;

  a {
    font-size: 14px;
    font-weight: 500;
    line-height: 1em;
    text-decoration: none;
    color: #555;
    border: 1px solid rgb(211, 220, 228);
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.2s ease-out 0s;
    text-decoration: none;
    color: rgb(36, 42, 49);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    height: 30px;
    padding: 5px 16px;
    &:hover {
      background-color: rgb(245, 247, 249);
    }
  }
`;

const FooterStyle = styled("div")`
  text-align: center;
  padding: 10px;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <small>&copy; 2019 nukopy All Rights Reserved.</small>
    </FooterStyle>
  )
}

export default class MDXRuntimeTest extends Component {
  waitForGlobal(name, timeout = 300) {
    return new Promise((resolve, reject) => {
      let waited = 0

      function wait(interval) {
        setTimeout(() => {
          waited += interval
          // some logic to check if script is loaded
          // usually it something global in window object
          if (window[name] !== undefined) {
            return resolve()
          }
          if (waited >= timeout * 1000) {
            return reject({ message: 'Timeout' })
          }
          wait(interval * 2)
        }, interval)
      }

      wait(30)
    })
  }

  componentDidMount() {
    this.waitForGlobal('MathJax').then(() => {
      top.MathJax.Hub.Config({
        tex2jax: {
          // inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['[', ']']],
          processEscapes: true,
          processEnvironments: true,
          skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
          TeX: {
            equationNumbers: { autoNumber: 'AMS' },
            extensions: ['AMSmath.js', 'AMSsymbols.js'],
          },
        },
      })
    });

    if (top.MathJax != null) {
      top.MathJax.Hub.Queue(['Typeset', top.MathJax.Hub])
    }
  }

  componentDidUpdate() {
    if (top.MathJax != null) {
      top.MathJax.Hub.Queue(['Typeset', top.MathJax.Hub])
    }
  }

  render() {
    const { data } = this.props;
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { docsLocation, title }
      }
    } = data;
    const gitHub = require("../components/images/github.svg");

    const navItems = allMdx.edges
      .map(({ node }) => node.fields.slug)
      .filter(slug => slug !== "/")
      .sort()
      .reduce(
        (acc, cur) => {
          if (forcedNavOrder.find(url => url === cur)) {
            return { ...acc, [cur]: [cur] };
          }

          const prefix = cur.split("/")[1];

          if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
            return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
          } else {
            return { ...acc, items: [...acc.items, cur] };
          }
        },
        { items: [] }
      );

    const nav = forcedNavOrder
      .reduce((acc, cur) => {
        return acc.concat(navItems[cur]);
      }, [])
      .concat(navItems.items)
      .map(slug => {
        if (slug) {
          const { node } = allMdx.edges.find(
            ({ node }) => node.fields.slug === slug
          );

          return { title: node.fields.title, url: node.fields.slug };
        }
      });

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle;
    const metaDescription = mdx.frontmatter.metaDescription;
    const metaOgImg = config.ogImage;
    const metaTwitterCard = config.siteMetadata.twitterCard;
    const metaTwitterCardLarge = config.siteMetadata.twitterCardLarge;
    let canonicalUrl = config.gatsby.siteUrl;
    canonicalUrl =
      config.gatsby.pathPrefix !== "/"
        ? canonicalUrl + config.gatsby.pathPrefix
        : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx.fields.slug;

    return (
      <Layout {...this.props}>
        <Helmet>
          {metaTitle ? <title>{metaTitle}</title> : null}
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? (
            <meta name="description" content={metaDescription} />
          ) : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? (
            <meta property="og:description" content={metaDescription} />
          ) : null}
          {metaTitle ? (
            <meta property="twitter:title" content={metaTitle} />
          ) : null}
          {metaDescription ? (
            <meta property="twitter:description" content={metaDescription} />
          ) : null}
          {metaOgImg ? (
            <meta property="og:image" content={metaOgImg} />
          ) : null}
          {/* cf: Twitter Card: https://saruwakakun.com/html-css/reference/twitter-card#section1 */}
          {metaTwitterCard ? (
            <meta name="twitter:card" content="summary" />
            /* Card Large <meta name="twitter:card" content="summary_large_image"> */
          ) : null}

          <link rel="canonical" href={canonicalUrl} />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
        </Helmet>
        <div className={"titleWrapper"}>
          <h1 className={"title"}>{mdx.fields.title}</h1>
          <Edit className={"mobileView"}>
            <Link
              className={"gitBtn"}
              // `docsLocation`: "https://github.com/nukopy/wiki" in `wiki/config.js`
              to={`${docsLocation}/tree/master/content/${mdx.parent.relativePath}`}
            >
              <img src={gitHub} alt={"Github logo"} /> Edit on GitHub
            </Link>
          </Edit>
        </div>
        <div className={"mainWrapper"}>
          <TableOfContents location={this.props.location} />
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
        <div className={"addPaddTopBottom"}>
          <NextPrevious mdx={mdx} nav={nav} />
        </div>
        <Footer />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
        }
      }
    }
  }
`;
