"use strict";

import HTMLNode from "../../node/html";

export default class XMLElementHTMLNode extends HTMLNode {
  static fromNothing() { return HTMLNode.fromNothing(XMLElementHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(XMLElementHTMLNode, outerNode); }
}
