"use strict";

import MarkdownNode from "../../node/markdown";

export default class ClassNameMarkdownNode extends MarkdownNode {
  className(context) {
    const className = this.fromSecondChildNode((secondChildNode) => {
      const terminalNode = secondChildNode, ///
            terminalNodeContent = terminalNode.getContent(),
            className = terminalNodeContent;  ///

      return className;
    });

    return className;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(ClassNameMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
