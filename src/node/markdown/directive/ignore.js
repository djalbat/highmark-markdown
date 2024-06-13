"use strict";

import DirectiveMarkdownNode from "../../../node/markdown/directive";

export default class IgnoreDirectiveMarkdownNode extends DirectiveMarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return DirectiveMarkdownNode.fromRuleNameChildNodesAndOpacity(IgnoreDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
