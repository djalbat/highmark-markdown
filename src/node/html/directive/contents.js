"use strict";

import HTMLNode from "../../../node/html";

export default class ContentsDirectiveHTMLNode extends HTMLNode {
  static tagName = null;

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(ContentsDirectiveHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ContentsDirectiveHTMLNode, outerNode); }
}
