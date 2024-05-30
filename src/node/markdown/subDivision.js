"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { second } = arrayUtilities;

export default class SubDivisionMarkdownNode extends MarkdownNode {
  getDOMElement() {
    const markdownNode = this.getMarkdownNode(),
          domElement = markdownNode.getDOMElement();

    return domElement;
  }

  getDOMElements() {
    const markdownNode = this.getMarkdownNode(),
          domElements = markdownNode.getDOMElements();

    return domElements;
  }

  asHTML(indent, context) {
    const markdownNode = this.getMarkdownNode(),
          markdownNodeHTML = markdownNode.asHTML(indent, context),
          html = markdownNodeHTML;  ///

    return html;
  }

  createDOMElement(context) {
    const domElement = null,
          markdownNode = this.getMarkdownNode();

    markdownNode.createDOMElement(context);

    return domElement;
  }

  getMarkdownNode() {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          markdownNode = secondChildNode; ///

    return markdownNode;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const subDivisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(SubDivisionMarkdownNode, ruleName, childNodes, opacity);

    return subDivisionMarkdownNode;
  }
}
