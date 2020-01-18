import React from "react";

import AnchorTag from "./anchor";
import Code from "./code";
import CodeBlock from "./codeBlock";
import Heading from "./heading";
import List from "./list";
import Text from "./text";
import Pre from "./pre";

export default {
  h1: Heading.h1,
  h2: props => {
    return <Heading.h2 id={props.children}>{props.children}</Heading.h2>;
  },
  h3: Heading.h3,
  h4: Heading.h4,
  h5: Heading.h5,
  h6: Heading.h6,
  p: Text,
  // ul: List,
  // ol: List,
  pre: Pre,
  code: CodeBlock,
  inlineCode: props => <Code {...props} />,
  a: props => <AnchorTag {...props} />
  // TODO add `img`
  // TODO add `blockquote`

  // TODO add `table`
};
