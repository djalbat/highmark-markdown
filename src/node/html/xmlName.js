"use strict";

import HTMLNode from "../../node/html";

export default class XMLNameHTMLNode extends HTMLNode {
  static className = "xml-name";

  static fromNothing() { return HTMLNode.fromNothing(XMLNameHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(XMLNameHTMLNode, outerNode); }
}
