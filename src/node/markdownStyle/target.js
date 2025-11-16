"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class TargetMarkdownStyleNode extends MarkdownStyleNode {
  target(context) {
    const target = this.fromSecondChildNode((secondChildNode) => {
      const targetTerminalNode = secondChildNode,  ///
            targetTerminalNodeContent = targetTerminalNode.getContent(),
            target = targetTerminalNodeContent; ///

      return target;
    });

    return target;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownStyleNode.fromRuleNameChildNodesOpacityAndPrecedence(TargetMarkdownStyleNode, ruleName, childNodes, opacity, precedence); }
}
