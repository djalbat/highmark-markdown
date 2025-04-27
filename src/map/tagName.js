"use strict";

import { forEachHTMLNode } from "../map/node/html";

const tagNameMap = {};

forEachHTMLNode((Class, ruleName) => {
  const { tagName } = Class;

  tagNameMap[ruleName] = tagName;
});

export default tagNameMap;
