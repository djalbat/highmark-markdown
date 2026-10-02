"use strict";

import MarkdownNode from "../../node/markdown";

export default class FootnoteMarkdownNode extends MarkdownNode {
  identifier(context) {
    const identifier = this.fromFirstChildNode((firstChildNode) => {
      const referenceMarkdownNode = firstChildNode,  ///
            identifier = referenceMarkdownNode.identifier(context);

      return identifier;
    });

    return identifier;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(FootnoteMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
