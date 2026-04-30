"use strict";

import MarkdownNode from "../../node/markdown";

export default class XMLElementMarkdownNode extends MarkdownNode {
  tagName(context) {
    const tagName = this.fromFirstChildNode((firstChildNode) => {
      const completeXMLTagMarkdownNode = firstChildNode, ///
            tagName = completeXMLTagMarkdownNode.tagName(context);

      return tagName;
    })

    return tagName;
  }

  attributeNames(context) {
    const attributeNames = this.fromFirstChildNode((firstChildNode) => {
      const completeXMLTagMarkdownNode = firstChildNode, ///
            attributeNames = completeXMLTagMarkdownNode.attributeNames(context);

      return attributeNames;
    })

    return attributeNames;
  }

  attributeValues(context) {
    const attributeValues = this.fromFirstChildNode((firstChildNode) => {
      const completeXMLTagMarkdownNode = firstChildNode, ///
            attributeValues = completeXMLTagMarkdownNode.attributeValues(context);

      return attributeValues;
    })

    return attributeValues;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence); }
}
