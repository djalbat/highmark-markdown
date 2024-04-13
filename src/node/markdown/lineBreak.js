"use strict";

import MarkdownNode from "../../node/markdown";

export default class LineBreakMarkdownNode extends MarkdownNode {
  childNodesAsHTML(indent, context) {
    const childNodesHTML = null;

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    ///
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(LineBreakMarkdownNode, ruleName, childNodes, opacity); }
}
