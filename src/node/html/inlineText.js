"use strict";

import HTMLNode from "../../node/html";

import { EMPTY_STRING } from "../../constants";

export default class InlineTextHTMLNode extends HTMLNode {
  isEndPlainText(context) { return this.outerNode.isEndPlainText(context); }

  childNodesAsHTML(indent, context) {
    let childNodesHTML = super.childNodesAsHTML(indent, context);

    const endPlainText = this.isEndPlainText(context);

    if (endPlainText) {
      childNodesHTML = `${childNodesHTML}
`;
    }

    return childNodesHTML;
  }

  childNodesAsPlainText(context) {
    const childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode) => {
      const childNodePlainText = childNode.asPlainText(context);

      childNodesPlainText = `${childNodesPlainText}${childNodePlainText}`;

      return childNodesPlainText;
    }, EMPTY_STRING);

    return childNodesPlainText;
  }

  static fromNothing() { return HTMLNode.fromNothing(InlineTextHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(InlineTextHTMLNode, outerNode); }
}
