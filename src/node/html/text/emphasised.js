"use strict";

import HTMLNode from "../../../node/html";

export default class EmphasisedTextHTMLNode extends HTMLNode {
  static tagName = "em";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(EmphasisedTextHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(EmphasisedTextHTMLNode, outerNode); }
}
