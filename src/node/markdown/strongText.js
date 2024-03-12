"use strict";

import contentMixins from "../../mixins/content";

import MarkdownNode from "../markdown";

class StrongTextMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(StrongTextMarkdownNode, ruleName, childNodes, ambiguous); }
}

Object.assign(StrongTextMarkdownNode.prototype, contentMixins);

export default StrongTextMarkdownNode;