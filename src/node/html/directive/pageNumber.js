"use strict";

import HTMLNode from "../../../node/html";

export default class PageNumberDirectiveHTMLNode extends HTMLNode {
  static tagName = null;

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(PageNumberDirectiveHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(PageNumberDirectiveHTMLNode, outerNode); }
}
