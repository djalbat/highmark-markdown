"use strict";

import MarkdownNode from "../../node/markdown";

export default class ImportsMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const childNodesHTML = this.childNodesAsHTML(indent, context),
          html = childNodesHTML;  ///

    return html;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ImportsMarkdownNode, ruleName, childNodes, opacity); }
}
