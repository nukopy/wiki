import React, { useState } from "react";

import config from "../../../config";
import { calculateTreeData } from "./tree-utils";
import TreeNode from "./treeNode";

const Tree = ({ edges }) => {
  const [treeData] = useState(() => {
    return calculateTreeData(edges);
  });
  const [collapsed, setCollapsed] = useState({
    // Edit here WHEN the order of left sidebar is changed or new chapter is added in `config.js`.
    "/Architecture": true,
    "/Database": true,
    "/DevelopmentEnvironment": true,
    "/Git": true,
    "/IDE": true,
    "/Languages": true,
    "/Platforms": true,
    "/TechnicalTerms": true,
    "/Web": true
  });
  const toggle = url => {
    console.log("before:", collapsed);
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url]
    });
    console.log("after:", collapsed);
  };

  return (
    <TreeNode
      className={`${
        config.sidebar.frontLine ? "showFrontLine" : "hideFrontLine"
      } firstLevel`}
      setCollapsed={toggle}
      collapsed={collapsed}
      {...treeData}
    />
  );
};

export default Tree;
