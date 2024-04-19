"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class EmphasisedTextMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(EmphasisedTextMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(EmphasisedTextMarkdownNode.prototype, contentMixins);

export default EmphasisedTextMarkdownNode;