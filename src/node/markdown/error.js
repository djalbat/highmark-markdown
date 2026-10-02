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

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(ErrorMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
