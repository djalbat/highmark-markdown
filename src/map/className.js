"use strict";

import htmlNodeMap from "../map/node/html";

import { ruleNames } from "../map/node/html";

const classNameMap = {};

ruleNames.forEach((ruleName) => {
  const Class = htmlNodeMap[ruleName],
        { className } = Class;

  classNameMap[ruleName] = className;
});

export default classNameMap;
