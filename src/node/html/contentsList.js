"use strict";

import HTMLNode from "../../node/html";

export default class ContentsListHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(ContentsListHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ContentsListHTMLNode, outerNode); }
}
