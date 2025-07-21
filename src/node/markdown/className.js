"use strict";

import MarkdownNode from "../../node/markdown";

export default class ClassNameMarkdownNode extends MarkdownNode {
  className(context) {
    const className = this.fromSecondChildNode((secondChildNode) => {
      const identifierTerminalNode = secondChildNode, ///
            content = identifierTerminalNode.getContent(),
            className = content;  ///

      return className;
    });

    return className;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(ClassNameMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
