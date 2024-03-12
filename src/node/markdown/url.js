"use strict";

import MarkdownNode from "../../node/markdown";
import contentMixins from "../../mixins/content";

export default class URLMarkdownNode extends MarkdownNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(URLMarkdownNode, ruleName, childNodes, ambiguous); }
}

Object.assign(URLMarkdownNode.prototype, contentMixins);
