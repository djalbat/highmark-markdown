"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

export default class URLMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(URLMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(URLMarkdownNode.prototype, contentMixins);
