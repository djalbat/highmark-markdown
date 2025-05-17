"use strict";

import HTMLNode from "../../../node/html";

export default class FootnotesDirectiveHTMLNode extends HTMLNode {
  static tagName = null;

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(FootnotesDirectiveHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(FootnotesDirectiveHTMLNode, outerNode); }
}
