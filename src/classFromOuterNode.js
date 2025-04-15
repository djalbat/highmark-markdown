"use strict";

import HTMLNode from "./node/html";
import htmlNodeMap from "./map/node/html";
import TopmostHTMLNode from "./node/html/topmost";

export default function ClassFromOuterNode(outerNode) {
  let Class;

  if (outerNode === null) {
    Class = TopmostHTMLNode;
  } else {
    const nonTerminalNode = outerNode,  ///
          ruleName = nonTerminalNode.getRuleName();

    Class = htmlNodeMap[ruleName] || HTMLNode;
  }

  return Class;
}
