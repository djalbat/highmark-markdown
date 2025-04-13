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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ClassNameMarkdownNode, ruleName, childNodes, opacity); }
}
