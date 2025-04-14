"use strict";

import HTMLNode from "../../../node/html";

export default class UnorderedItemHTMLNode extends HTMLNode {
  static tagName = "li";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(UnorderedItemHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(UnorderedItemHTMLNode, outerNode); }
}
