"use strict";

import HTMLNode from "./node/html";
import TopmostHTMLNode from "./node/html/topmost";
import ruleNameToClassMap from "./ruleNameToClassMap";

export default function ClassFromOuterNode(outerNode) {
  let Class;

  if (outerNode === null) {
    Class = TopmostHTMLNode;
  } else {
    const nonTerminalNode = outerNode,  ///
          ruleName = nonTerminalNode.getRuleName();

    Class = ruleNameToClassMap[ruleName] || HTMLNode;
  }

  return Class;
}
