"use strict";

import contentMixins from "../../mixins/content";

import MarkdownNode from "../markdown";

class EmphasisedTextMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(EmphasisedTextMarkdownNode, ruleName, childNodes, ambiguous); }
}

Object.assign(EmphasisedTextMarkdownNode.prototype, contentMixins);

export default EmphasisedTextMarkdownNode;