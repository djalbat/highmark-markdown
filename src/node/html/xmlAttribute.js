"use strict";

import HTMLNode from "../../node/html";

export default class XMLAttributeTMLNode extends HTMLNode {
  static className = "xml-attribute";

  static fromNothing() { return HTMLNode.fromNothing(XMLAttributeTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(XMLAttributeTMLNode, outerNode); }
}
