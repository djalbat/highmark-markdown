"use strict";

import XMLTagMarkdownNode from "../../../node/markdown/xmlTag";

export default class CompleteXMLTagMarkdownNode extends XMLTagMarkdownNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return XMLTagMarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(CompleteXMLTagMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
