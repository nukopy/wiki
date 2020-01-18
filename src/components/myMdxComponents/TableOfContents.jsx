import React from "react";
import { StaticQuery, graphql } from "gatsby";

import config from "../../../config";
import Link from "../link";

const isLocal = false;
const host = isLocal ? "http://localhost:8000": "https://nukopy-wiki.netlify.com";

const TableOfContents = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
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
    `}
    render={({ allMdx }) => {
      return (
        <>
          <ul>
            {allMdx.edges.map((edge, idx) => {
              const title = edge.node.fields.title;
              const path = edge.node.fields.slug;

              return (
                <li key={`${idx}-${path}`}>
                  <Link to={host + path}>
                    {title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </>
      );
    }}
  />
);

export default TableOfContents;
