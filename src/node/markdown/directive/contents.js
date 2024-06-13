"use strict";

import DirectiveMarkdownNode from "../../../node/markdown/directive";

export default class ContentsDirectiveMarkdownNode extends DirectiveMarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return DirectiveMarkdownNode.fromRuleNameChildNodesAndOpacity(ContentsDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
