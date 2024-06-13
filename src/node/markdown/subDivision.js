"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { second } = arrayUtilities;

export default class SubDivisionMarkdownNode extends MarkdownNode {
  getDOMElement() {
    const secondMarkdownNode = this.getSecondMarkdownNode(),
          domElement = secondMarkdownNode.getDOMElement();

    return domElement;
  }

  getDOMElements() {
    const secondMarkdownNode = this.getSecondMarkdownNode(),
          domElements = secondMarkdownNode.getDOMElements();

    return domElements;
  }

  lines(context) {
    const secondMarkdownNode = this.getSecondMarkdownNode(),
          lines = secondMarkdownNode.lines(context);

    return lines;
  }

  asHTML(indent, context) {
    const secondMarkdownNode = this.getSecondMarkdownNode(),
          html = secondMarkdownNode.asHTML(indent, context);

    return html;
  }

  createDOMElement(context) {
    const domElement = null,
          secondMarkdownNode = this.getSecondMarkdownNode();

    secondMarkdownNode.createDOMElement(context);

    return domElement;
  }

  getSecondMarkdownNode() {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          secondMarkdownNode = secondChildNode; ///

    return secondMarkdownNode;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
    const subDivisionMarkdownNode = MarkdownNode.fromRuleNameChildNodesAndOpacity(SubDivisionMarkdownNode, ruleName, childNodes, opacity);

    return subDivisionMarkdownNode;
  }
}
