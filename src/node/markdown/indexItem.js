"use strict";

import MarkdownNode from "../../node/markdown";

export default class IndexItemMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    indent = this.adjustIndent(indent);

    const childNodesHTML = this.childNodesAsHTML(indent, context),
          startingTag = this.startingTag(context),
          closingTag = this.closingTag(context),
          html = `${indent}${startingTag}${childNodesHTML}${closingTag}
`;

    return html;
  }

  childNodesAsHTML(indent, context) {
    indent = null;

    const childNodesHTML = super.childNodesAsHTML(indent, context);

    return childNodesHTML;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(IndexItemMarkdownNode, ruleName, childNodes, opacity); }
}
