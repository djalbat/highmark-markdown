"use strict";

import HTMLNode from "../../../node/html";

export default class ContentsItemHTMLNode extends HTMLNode {
  static tagName = "li";

  static className = "contents";

  static fromNothing() { return HTMLNode.fromNothing(ContentsItemHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ContentsItemHTMLNode, outerNode); }
}
