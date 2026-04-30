"use strict";

import HTMLNode from "../../node/html";

export default class CompleteXMLTagHTMLNode extends HTMLNode {
  static className = "complete-xml-tag";

  static fromNothing() { return HTMLNode.fromNothing(CompleteXMLTagHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(CompleteXMLTagHTMLNode, outerNode); }
}
