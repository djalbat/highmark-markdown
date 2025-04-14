"use strict";

import HTMLNode from "../../../node/html";

export default class ContentsListHTMLNode extends HTMLNode {
  static tagName = "ul";

  static className = "contents";

  static fromNothing() { return HTMLNode.fromNothing(ContentsListHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ContentsListHTMLNode, outerNode); }
}
