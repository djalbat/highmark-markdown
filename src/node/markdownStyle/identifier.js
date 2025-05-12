"use strict";

import MarkdownStyleNode from "../../node/markdownStyle";

export default class IdentifierMarkdownStyleNode extends MarkdownStyleNode {
  name() {
    const name = this.fromFirstChildNode((firstChildNode) => {
      const nameTerminalNode = firstChildNode,  ///
            content = nameTerminalNode.getContent(),
            name = content; ///

      return name;
    });

    return name;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownStyleNode.fromRuleNameChildNodesAndOpacity(IdentifierMarkdownStyleNode, ruleName, childNodes, opacity); }
}
