"use strict";

import HTMLNode from "../../node/html";

export default class StartXMLTagHTMLNode extends HTMLNode {
  static className = "start-xml-tag";

  static fromNothing() { return HTMLNode.fromNothing(StartXMLTagHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(StartXMLTagHTMLNode, outerNode); }
}
