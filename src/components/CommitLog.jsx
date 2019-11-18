import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// const CommitLog = () => {
//   const {
//     github: {
//       repository: { ref: target }
//     }
//   } = useStaticQuery(graphql`
//     {
//       github {
//         repository(owner: "nukopy", name: "wiki") {
//           ref(qualifiedName: "master") {
//             target {
//               ... on GitHub_Commit {
//                 id
//                 history(first: 5) {
//                   edges {
//                     node {
//                       id
//                       message
//                       committedDate
//                       url
//                       author {
//                         name
//                         email
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `);
//   console.log(target);

//   return <div>CommitLog.jsx</div>;
// };

// export default CommitLog;
