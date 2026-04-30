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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return XMLTagMarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(EndXMLTagMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
