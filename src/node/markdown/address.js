"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

export default class AddressMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(AddressMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(AddressMarkdownNode.prototype, contentMixins);
