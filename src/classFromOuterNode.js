"use strict";

import HTMLNode from "./node/html";
import TopmostHTMLNode from "./node/html/topmost";
import ruleNameToClassMap from "./ruleNameToClassMap";
import VerticalSpaceHTMLNode from "./node/html/verticalSpace";
import VerticalSpaceMarkdownNode from "./node/markdown/verticalSpace";

export default function ClassFromOuterNode(outerNode) {
  let Class;

  if (outerNode === null) {
    Class = TopmostHTMLNode;
  } else {
    const outerNodeVerticalSpaceMarkdownNode = (outerNode instanceof VerticalSpaceMarkdownNode);

    if (outerNodeVerticalSpaceMarkdownNode) {
      Class = VerticalSpaceHTMLNode;
    } else {
      const nonTerminalNode = outerNode,  ///
            ruleName = nonTerminalNode.getRuleName();

      Class = ruleNameToClassMap[ruleName] || HTMLNode;
    }
  }

  return Class;
}
