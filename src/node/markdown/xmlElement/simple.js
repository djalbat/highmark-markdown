"use strict";

import XMLElementMarkdownNode from "../../../node/markdown/xmlElement";

export default class SimpleXMLElementMarkdownNode extends XMLElementMarkdownNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return XMLElementMarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(SimpleXMLElementMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
