"use strict";

import HTMLNode from "../../node/html";
import PlainTextHTMLNode from "./text/plain";

import { EMPTY_STRING } from "../../constants";

export default class LineHTMLNode extends HTMLNode {
  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    let previousChildNode = null;

    childNodesHTML = this.reduceChildNode((childNodesHTML, childNode) => {
      const previousChildNodePlainTextHTMLNode = (previousChildNode instanceof PlainTextHTMLNode);

      if (previousChildNodePlainTextHTMLNode) {
        const childNodePlainTextHTMLNode = (childNode instanceof PlainTextHTMLNode);

        if (!childNodePlainTextHTMLNode) {
          childNodesHTML = `${childNodesHTML}
`;
        }
      }

      const childNodeHTML = childNode.asHTML(indent, context);

      childNodesHTML = `${childNodesHTML}${childNodeHTML}`;

      previousChildNode = childNode;  ///

      return childNodesHTML;
    }, EMPTY_STRING);

    const previousChildNodePlainTextHTMLNode = (previousChildNode instanceof PlainTextHTMLNode);

    if (previousChildNodePlainTextHTMLNode) {
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

  static tagName = "span";

  static className = "line";

  static fromNothing() { return HTMLNode.fromNothing(LineHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(LineHTMLNode, outerNode); }
}
