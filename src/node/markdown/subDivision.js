"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { second } = arrayUtilities;

export default class SubDivisionMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, opacity, precedence, domElement, domElements) {
    super(ruleName, childNodes, opacity, precedence, domElement);

    this.domElements = domElements;
  }

  getDOMElements() {
    return this.domElements;
  }

  asHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          secondChildNodeHTML = secondChildNode.asHTML(indent, context),
          html = secondChildNodeHTML;  ///

    return html;
  }

  createDOMElement(context) {
    const domElement = null,
          childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes);

    secondChildNode.createDOMElement(context);

    this.domElements = secondChildNode.getDOMElements();

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const domElements = [],
          subDivisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(SubDivisionMarkdownNode, ruleName, childNodes, opacity, domElements);

    return subDivisionMarkdownNode;
  }
}
