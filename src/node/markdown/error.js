"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class ErrorMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const content = this.content(context),
          childNodesHTML = content;  ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const content = this.content(context),
          domElement = this.getDOMElement(),
          parentDOMElement = domElement,  ///
          siblingDOMElement = null,
          childNodeDOMElement = document.createTextNode(content);

    parentDOMElement.insertBefore(childNodeDOMElement, siblingDOMElement);
  }

  content(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          content = terminalNode.getContent();

    return content;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(ErrorMarkdownNode, ruleName, childNodes, ambiguous); }
}