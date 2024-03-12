"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class ErrorMarkdownNode extends MarkdownNode {
  createDOMElement(context) {
    const domElement = super.createDOMElement(context),
          content = this.getContent(context),
          textContent = content;  ///

    Object.assign(domElement, {
      textContent
    });

    return domElement;
  }

  createChildNodeDOMElements(context) {
    ///
  }

  getContent() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,  ///
          content = terminalNode.getContent();

    return content;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(ErrorMarkdownNode, ruleName, childNodes, ambiguous); }
}