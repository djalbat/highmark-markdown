"use strict";

import MarkdownNode from "../../node/markdown";

export default class ErrorMarkdownNode extends MarkdownNode {
  error(context) {
    const error = this.fromFirstChildNode((firstChildNode) => {
      const terminalNode = firstChildNode,  ///
            content = terminalNode.getContent(),
            error = content;  ///

      return error;
    });

    return error;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ErrorMarkdownNode, ruleName, childNodes, opacity); }
}
