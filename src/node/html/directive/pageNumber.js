"use strict";

import HTMLNode from "../../../node/html";

export default class PageNumberDirectiveHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(PageNumberDirectiveHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(PageNumberDirectiveHTMLNode, outerNode); }
}
