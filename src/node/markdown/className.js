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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(ClassNameMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
