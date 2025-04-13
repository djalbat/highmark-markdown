"use strict";

import HTMLNode from "../../node/html";

export default class ParagraphHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(ParagraphHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ParagraphHTMLNode, outerNode); }
}
