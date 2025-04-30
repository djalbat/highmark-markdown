"use strict";

import HTMLNode from "../../../node/html";

export default class FootnotesDirectiveHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(FootnotesDirectiveHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(FootnotesDirectiveHTMLNode, outerNode); }
}
