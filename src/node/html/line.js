"use strict";

import HTMLNode from "../../node/html";
import PlainTextHTMLNode from "./text/plain";

import { EMPTY_STRING } from "../../constants";
import { assignIndexes, deleteIndexes } from "../../utilities/whitespace";

export default class LineHTMLNode extends HTMLNode {
  mount(parentDOMElement, siblingDOMElement, context) {
    const node = this;  ///

    assignIndexes(node, context);

    super.mount(parentDOMElement, siblingDOMElement, context);

    deleteIndexes(context);
  }

  unmount(parentDOMElement, context) {
    super.unmount(parentDOMElement, context);
  }

  childNodesAsHTML(indent, context) {
    let childNodesHTML;

    const node = this;  ///

    assignIndexes(node, context);

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

    deleteIndexes(context);

    return childNodesHTML;
  }

  childNodesAsPlainText(context) {
    let childNodesPlainText;

    const node = this;  ///

    assignIndexes(node, context)

    childNodesPlainText = this.reduceChildNode((childNodesPlainText, childNode) => {
      const childNodePlainText = childNode.asPlainText(context);

      childNodesPlainText = `${childNodesPlainText}${childNodePlainText}`;

      return childNodesPlainText;
    }, EMPTY_STRING);

    deleteIndexes(context);

    return childNodesPlainText;
  }

  static tagName = "span";

  static className = "line";

  static fromNothing() { return HTMLNode.fromNothing(LineHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(LineHTMLNode, outerNode); }
}
