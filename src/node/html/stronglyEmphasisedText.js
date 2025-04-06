"use strict";

import HTMLNode from "../../node/html";
import elementMap from "../../elementMap";

import { STRONG_TEXT_RULE_NAME } from "../../ruleNames";

const { tagName } = elementMap[STRONG_TEXT_RULE_NAME];

export default class StronglyEmphasisedTextHTMLNode extends HTMLNode {
  asHTML(indent, context) {
    let html = super.asHTML(indent, context);

    const childNodesHTML = html,  ///
          startingTag = `<${tagName}>`,
          closingTag = `</${tagName}>`;

    html = `${startingTag}${childNodesHTML}${closingTag}`;

    return html;
  }

  static fromNothing() { return HTMLNode.fromNothing(StronglyEmphasisedTextHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(StronglyEmphasisedTextHTMLNode, outerNode); }
}
