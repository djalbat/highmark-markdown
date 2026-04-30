"use strict";

import HTMLNode from "../../node/html";

export default class EndXMLTagHTMLNode extends HTMLNode {
  static className = "end-xml-tag";

  static fromNothing() { return HTMLNode.fromNothing(EndXMLTagHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(EndXMLTagHTMLNode, outerNode); }
}
