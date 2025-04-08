"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class EmphasisedTextMarkdownNode extends MarkdownNode {
  inlineText(context) {
    const inlineText = this.fromSecondChildNode((secondChildNode) => {
      const indent = null,
            inlineTextMarkdownNode = secondChildNode, ///
            inlineTextMarkdownNodeHTML = inlineTextMarkdownNode.asHTML(indent, context),
            inlineText = inlineTextMarkdownNodeHTML;  ///

      return inlineText;
    });

    return inlineText;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EmphasisedTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(EmphasisedTextMarkdownNode.prototype, contentMixins);

export default EmphasisedTextMarkdownNode;
