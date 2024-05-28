"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class DirectivesMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          directiveMarkdownNode = firstChildNode, ///
          html = directiveMarkdownNode.asHTML(indent, context);

    return html;
  }

  createDOMElement(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          directiveMarkdownNode = firstChildNode, ///
          domElement = directiveMarkdownNode.createDOMElement(context);

    this.setDOMElement(domElement);

    return domElement;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(DirectivesMarkdownNode, ruleName, childNodes, opacity); }
}
