"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class DirectivesMarkdownNode extends MarkdownNode {
  getDOMElement() {
    const directiveMarkdownNode = this.getDirectiveMarkdownNode(),
          directiveMarkdownNodeDOMElement = directiveMarkdownNode.getDOMElement(),
          domElement = directiveMarkdownNodeDOMElement; ///

    return domElement;
  }

  asHTML(indent, context) {
    const directiveMarkdownNode = this.getDirectiveMarkdownNode(),
          directiveMarkdownNodeHTML = directiveMarkdownNode.asHTML(indent, context),
          html = directiveMarkdownNodeHTML;  ///

    return html;
  }

  createDOMElement(context) {
    const directiveMarkdownNode = this.getDirectiveMarkdownNode();

    directiveMarkdownNode.createDOMElement(context);
  }

  getDirectiveMarkdownNode() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          directiveMarkdownNode = firstChildNode; ///

    return directiveMarkdownNode;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(DirectivesMarkdownNode, ruleName, childNodes, opacity); }
}
