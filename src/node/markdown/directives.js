"use strict";

import MarkdownNode from "../../node/markdown";

export default class DirectivesMarkdownNode extends MarkdownNode {
  asHTML(indent, context) {
    const firstDirectiveMarkdownNode = this.getFirstDirectiveMarkdownNode(),
          firstDirectiveMarkdownNodeHTML = firstDirectiveMarkdownNode.asHTML(indent, context),
          html = firstDirectiveMarkdownNodeHTML;  ///

    return html;
  }

  getFirstDirectiveMarkdownNode() {
    const firstDirectiveMarkdownNode = this.fromFirstChildNode((firstChildNode) => {
      const firstDirectiveMarkdownNode = firstChildNode;  ///

      return firstDirectiveMarkdownNode;
    });

    return firstDirectiveMarkdownNode;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(DirectivesMarkdownNode, ruleName, childNodes, opacity); }
}
