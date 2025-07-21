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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(FootnoteMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
