"use strict";

import MarkdownNode from "../../node/markdown";

export default class XMLAttributeMarkdownNode extends MarkdownNode {
  propertyName(context) {
    const attributeName = this.attributeName(context),
          propertyName = attributeName; ///

    return propertyName;
  }

  propertyValue(context) {
    const attributeValue = this.attributeValue(context),
          propertyValue = attributeValue; ///

    return propertyValue;
  }

  attributeName(context) {
    const attributeName = this.fromFirstChildNode((firstChildNode) => {
      const xmlAttributeNameMakrdownNode = firstChildNode,  ///
            attributeName = xmlAttributeNameMakrdownNode.attributeName(context);

      return attributeName;
    });

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = this.fromFirstLastChildNode((firstLastChildNode) => {
      const xmlAttributeValueMakrdownNode = firstLastChildNode,  ///
            attributeValue = xmlAttributeValueMakrdownNode.attributeValue(context);

      return attributeValue;
    });

    return attributeValue;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(XMLAttributeMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
