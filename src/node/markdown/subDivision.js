"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { second } = arrayUtilities;

export default class SubDivisionMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          secondChildNodeHTML = secondChildNode.asHTML(indent, context),
          html = secondChildNodeHTML;  ///

    return html;
  }

  createDOMElement(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          secondChildNodeDOMElement = secondChildNode.createDOMElement(context),
          domElement = secondChildNodeDOMElement;  ///

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(SubDivisionMarkdownNode, ruleName, childNodes, opacity); }
}
