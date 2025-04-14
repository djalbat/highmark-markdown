"use strict";

import htmlNodeMap from "./nodeMap/html";

import { ruleNames } from "./nodeMap/html";

const elementMap = {};

ruleNames.forEach((ruleName) => {
  const Class = htmlNodeMap[ruleName],
        { tagName, className } = Class;

  elementMap[ruleName] = {
    tagName,
    className
  };
});

export default elementMap;
