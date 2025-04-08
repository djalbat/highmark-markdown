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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(FootnoteMarkdownNode, ruleName, childNodes, opacity); }
}
