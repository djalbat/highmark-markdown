"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class DirectivesMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const firstDirectiveMarkdownNode = this.getFirstDirectiveMarkdownNode(),
          firstDirectiveMarkdownNodeHTML = firstDirectiveMarkdownNode.asHTML(indent, context),
          html = firstDirectiveMarkdownNodeHTML;  ///

    return html;
  }

  getFirstDirectiveMarkdownNode() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          firstDirectiveMarkdownNode = firstChildNode; ///

    return firstDirectiveMarkdownNode;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(DirectivesMarkdownNode, ruleName, childNodes, opacity); }
}
