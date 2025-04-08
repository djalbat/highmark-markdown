"use strict";

import HTMLNode from "../../node/html";

export default class EmptyTableCellHTMLNode extends HTMLNode {
  childNodesAsHTML(indent, context) {
    const childNodesHTML = null;

    return childNodesHTML;
  }

  createDOMElement(context) {
    const domElement = null;

    return domElement;
  }

  static fromNothing() { return HTMLNode.fromNothing(EmptyTableCellHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(EmptyTableCellHTMLNode, outerNode); }
}
