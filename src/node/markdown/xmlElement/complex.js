"use strict";

import XMLElementMarkdownNode from "../../../node/markdown/xmlElement";

export default class ComplexXMLElementMarkdownNode extends XMLElementMarkdownNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return XMLElementMarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(ComplexXMLElementMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
