"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class SubDivisionMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          firstChildNodeHTML = firstChildNode.asHTML(indent, context),
          html = firstChildNodeHTML;  ///

    return html;
  }

  createDOMElement(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          firstChildNodeDOMElement = firstChildNode.createDOMElement(context),
          domElement = firstChildNodeDOMElement;  ///

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(SubDivisionMarkdownNode, ruleName, childNodes, opacity); }
}
