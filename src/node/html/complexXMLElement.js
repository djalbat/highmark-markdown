"use strict";

import HTMLNode from "../../node/html";

export default class ComplexXMLElementHTMLNode extends HTMLNode {
  static className = "complex-html-element";

  static fromNothing() { return HTMLNode.fromNothing(ComplexXMLElementHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ComplexXMLElementHTMLNode, outerNode); }
}
