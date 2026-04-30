"use strict";

import HTMLNode from "../../node/html";

export default class XMLTextHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(XMLTextHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(XMLTextHTMLNode, outerNode); }
}
