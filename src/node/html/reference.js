"use strict";

import HTMLNode from "../../node/html";

export default class ReferenceHTMLNode extends HTMLNode {
  static tagName = "a";

  static className = "reference";

  static fromNothing() { return HTMLNode.fromNothing(ReferenceHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ReferenceHTMLNode, outerNode); }
}
