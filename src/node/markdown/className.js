"use strict";

import MarkdownNode from "../../node/markdown";

export default class ClassNameMarkdownNode extends MarkdownNode {
  className(context) {
    const className = this.fromSecondChildNode((secondChildNode) => {
      const identifierTerminalNode = secondChildNode, ///
            identifierTerminalNodeContent = identifierTerminalNode.getContent(),
            className = identifierTerminalNodeContent; ///

      return className;
    });

    return className;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ClassNameMarkdownNode, ruleName, childNodes, opacity); }
}
