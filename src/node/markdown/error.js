"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

class ErrorMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ErrorMarkdownNode, ruleName, childNodes, opacity); }
}

Object.assign(ErrorMarkdownNode.prototype, contentMixins);

export default ErrorMarkdownNode;
