"use strict";

import MarkdownNode from "../../node/markdown";

export default class HeaderMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const childNodesHTML = this.childNodesAsHTML(indent, context),
          html = childNodesHTML;  ///

    return html;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(HeaderMarkdownNode, ruleName, childNodes, opacity); }
}
