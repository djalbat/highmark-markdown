"use strict";

import DirectiveMarkdownNode from "../../../node/markdown/directive";

export default class FootnotesDirectiveMarkdownNode extends DirectiveMarkdownNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return DirectiveMarkdownNode.fromRuleNameChildNodesAndOpacity(FootnotesDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
