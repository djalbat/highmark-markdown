"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { push } = arrayUtilities;

export default class DirectivesMarkdownNode extends MarkdownNode {
  constructor(ruleName, childNodes, opacity, precedence, domElement, domElements) {
    super(ruleName, childNodes, opacity, precedence, domElement);

    this.domElements = domElements;
  }

  getDOMElements() {
    return this.domElements;
  }

  asHTML(indent, context) {
    const childNodesHTML = this.childNodesAsHTML(indent, context),
          html = childNodesHTML;  ///

    return html;
  }

  createDOMElement(context) {
    const domElement = null,
          childNodes = this.getChildNodes();

    childNodes.forEach((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
              markdownNode = nonTerminalNode; ///

        markdownNode.createDOMElement(context);

        const markdownNodeDOMElements = markdownNode.getDOMElements();

        push(this.domElements, markdownNodeDOMElements);
      }
    });

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const domElements = [],
          directivesMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(DirectivesMarkdownNode, ruleName, childNodes, opacity, domElements);

    return directivesMarkdownNode;
  }
}
