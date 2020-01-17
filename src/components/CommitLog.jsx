import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import moment from "moment";

const CommitLog = () => {
  const {
    github: {
      repository: {
        ref: {
          target: {
            history: { edges: commits }
          }
        }
      }
    }
  } = useStaticQuery(graphql`
    {
      github {
        repository(owner: "nukopy", name: "wiki") {
          ref(qualifiedName: "master") {
            target {
              ... on GitHub_Commit {
                id
                history(first: 10) {
                  edges {
                    node {
                      id
                      message
                      committedDate
                      url
                      author {
                        name
                        email
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <ul>
      {commits.map(commit => {
        return (
          <li key={commit.node.id}>
            <a href={commit.node.url} target="_blank">
              {moment(commit.node.committedDate).format(
                "MMM DD, YYYY hh:mm:ss"
              )}{" "}
              - {commit.node.message}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default CommitLog;
