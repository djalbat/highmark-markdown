"use strict";

import HTMLNode from "../../../node/html";

export default class UnorderedListHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(UnorderedListHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(UnorderedListHTMLNode, outerNode); }
}
