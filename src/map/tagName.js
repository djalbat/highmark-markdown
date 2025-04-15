"use strict";

import htmlNodeMap from "../map/node/html";

import { ruleNames } from "../map/node/html";

const tagNameMap = {};

ruleNames.forEach((ruleName) => {
  const Class = htmlNodeMap[ruleName],
        { tagName } = Class;

  tagNameMap[ruleName] = tagName;
});

export default tagNameMap;
