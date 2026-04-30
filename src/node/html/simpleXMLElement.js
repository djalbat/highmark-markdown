"use strict";

import HTMLNode from "../../node/html";

export default class SimpleXMLElementHTMLNode extends HTMLNode {
  static className = "simple-xml-element";

  static fromNothing() { return HTMLNode.fromNothing(SimpleXMLElementHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(SimpleXMLElementHTMLNode, outerNode); }
}
