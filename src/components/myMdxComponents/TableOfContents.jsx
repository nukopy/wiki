import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";

import config from "../../../config";

const TableOfContentsBox = styled("div")`
  background-color: #dbdee7;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const TableOfContentsTitle = styled("h3")`
  font-size: 16px;
  padding: 0px;
  margin: 0px;
`

const ListItem = ({level, ...props}) => {
  return (
    <li>
      <a href={props.to} {...props} />
    </li>
  );
};

const TableOfContents = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}

    render={({ allMdx }) => {
      let navItems = [];
      let finalNavItems;
      // console.log(allMdx.edges);

      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        const navItems = allMdx.edges.map((item, index) => {
          let innerItems;

          if (item !== undefined) {
            if (
              item.node.fields.slug === location.pathname ||
              config.gatsby.pathPrefix + item.node.fields.slug ===
                location.pathname
            ) {
              if (item.node.tableOfContents.items) {
                innerItems = item.node.tableOfContents.items.map(
                  (innerItem, index) => {
                    return (
                      <ListItem key={index} to={`#${innerItem.title}`} level={1}>
                        {innerItem.title}
                      </ListItem>
                    );
                  }
                );
              }
            }
          }
          if (innerItems) {
            finalNavItems = innerItems;
          }
        });
      }

      if (finalNavItems && finalNavItems.length) {
        return (
          <TableOfContentsBox>
            {/* <TableOfContentsTitle>Contents</TableOfContentsTitle> */}
            <ul>
              {finalNavItems}
            </ul>
          </TableOfContentsBox>
        );
      } else {
        return (
            <ul></ul>
        );
      }
    }}


      /* return (

        <ul>
          {allMdx.edges.map((edge, idx) => {
            const title = edge.node.fields.title;
            const path = edge.node.tableOfContents.items ?
              edge.node.tableOfContents.items[0].url
              : null;

            return (
              <ListItem key={`${idx}-${title}`} to={path}>
                {title}
              </ListItem>
            )
          })}
        </ul>

      ); */
  />
);

export default TableOfContents;
