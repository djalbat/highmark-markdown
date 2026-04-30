"use strict";

import MarkdownNode from "../../node/markdown";

import { XML_ATTRIBUTE_MARKDOWN_RULE_NAME } from "../../ruleNames/markdown";

export default class XMLTagMarkdownNode extends MarkdownNode {
  getXMLAttributeMarkdownNodes() {
    const ruleName = XML_ATTRIBUTE_MARKDOWN_RULE_NAME,
          xmlAttributeMarkdownNodes = this.getChildMarkdownNodesByRuleName(ruleName);

    return xmlAttributeMarkdownNodes;
  }

  tagName(context) {
    const tagName = this.fromThirdChildNode((thirdChildNode) => {
      const XMLNameMarkdownNode = thirdChildNode, ///
            tagName = XMLNameMarkdownNode.tagName(context);

      return tagName;
    })

    return tagName;
  }

  attributeNames(context) {
    const xmlAttributeMarkdownNodes = this.getXMLAttributeMarkdownNodes(),
          atributeNames = xmlAttributeMarkdownNodes.map((xmlAttributeMarkdownNode) => {
            const attributeName = xmlAttributeMarkdownNode.attributeName(context);

            return attributeName;
          });

    return atributeNames;
  }

  attributeValues(context) {
    const xmlAttributeMarkdownNodes = this.getXMLAttributeMarkdownNodes(),
          atributeValues = xmlAttributeMarkdownNodes.map((xmlAttributeMarkdownNode) => {
            const attributeValue = xmlAttributeMarkdownNode.attributeValue(context);

            return attributeValue;
          });

    return atributeValues;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence); }
}
