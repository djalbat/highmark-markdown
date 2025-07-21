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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(ErrorMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
