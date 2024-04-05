"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class DirectiveMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          firstChildNodeHTML = firstChildNode.asHTML(indent, context),
          html = firstChildNodeHTML;  ///

    return html;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(DirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
