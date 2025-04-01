"use strict";

import MarkdownNode from "../../node/markdown";

export default class PathMarkdownNode extends MarkdownNode {
  getContent() {
    const content = this.fromFirstChildNode((firstChildNode) => {
      const pathTerminalNode = firstChildNode,  ///
            pathTerminalNodeContent = pathTerminalNode.getContent(),
            content = pathTerminalNodeContent;  ///

      return content;
    });

    return content;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(PathMarkdownNode, ruleName, childNodes, opacity); }
}
