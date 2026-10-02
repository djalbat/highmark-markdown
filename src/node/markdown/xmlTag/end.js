"use strict";

import XMLTagMarkdownNode from "../../../node/markdown/xmlTag";

export default class EndXMLTagMarkdownNode extends XMLTagMarkdownNode {
  properties(context) {
    const properties = null;

    return properties;
  }

  attributeNames(context) {
    const attributeNames = null;

    return attributeNames;
  }

  attributeValues(context) {
    const attributeValues = null;

    return attributeValues;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return XMLTagMarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(EndXMLTagMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
