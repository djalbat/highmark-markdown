"use strict";

import { forEachHTMLNode } from "../map/node/html";

const tagNameMap = {};

forEachHTMLNode((Class, markdownRuleName) => {
  const { tagName } = Class;

  tagNameMap[markdownRuleName] = tagName;
});

export default tagNameMap;
