"use strict";

import MarkdownNode from "../../node/markdown";

export default class PathMarkdownNode extends MarkdownNode {
  path(context) {
    const path = this.fromFirstChildNode((firstChildNode) => {
      const pathTerminalNode = firstChildNode,  ///
            pathTerminalNodeContent = pathTerminalNode.getContent(),
            path = pathTerminalNodeContent;  ///

      return path;
    });

    return path;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(PathMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
