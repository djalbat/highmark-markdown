"use strict";

import MarkdownNode from "../../../node/markdown";

export default class BlockListingMarkdownNode extends MarkdownNode {
  releaseName(context) {
    const releaseName = this.fromFirstChildNode((firstChildNode) => {
      const blockStartMarkdownNode = firstChildNode, ///
            releaseName = blockStartMarkdownNode.releaseName(context);

      return releaseName;
    });

    return releaseName;
  }

  languageName(context) {
    const languageName = this.fromFirstChildNode((firstChildNode) => {
      const blockStartMarkdownNode = firstChildNode, ///
            languageName = blockStartMarkdownNode.languageName(context);

      return languageName;
    });

    return languageName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(BlockListingMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
