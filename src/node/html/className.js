"use strict";

import HTMLNode from "../../node/html";

export default class ClassNameHTMLNode extends HTMLNode {
  className(context) { return this.outerNode.className(context); }

  static fromNothing() { return HTMLNode.fromNothing(ClassNameHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ClassNameHTMLNode, outerNode); }
}
