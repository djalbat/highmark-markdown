"use strict";

import { forEachHTMLNode } from "../map/node/html";

const classNameMap = {};

forEachHTMLNode((Class, ruleName) => {
  const { className } = Class;

  classNameMap[ruleName] = className;
});

export default classNameMap;
