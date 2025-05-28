"use strict";

import { forEachHTMLNode } from "../map/node/html";

const classNameMap = {};

forEachHTMLNode((Class, markdownRuleName) => {
  const { className } = Class;

  classNameMap[markdownRuleName] = className;
});

export default classNameMap;
