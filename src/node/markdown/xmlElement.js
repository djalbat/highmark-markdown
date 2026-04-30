"use strict";

import MarkdownNode from "../../node/markdown";

export default class XMLElementMarkdownNode extends MarkdownNode {
  tagName(context) {
    const tagName = this.fromFirstChildNode((firstChildNode) => {
      const xmlTagMarkdownNode = firstChildNode, ///
            tagName = xmlTagMarkdownNode.tagName(context);

      return tagName;
    })

    return tagName;
  }

  properties(context) {
    const properties = this.fromFirstChildNode((firstChildNode) => {
      const xmlTagMarkdownNode = firstChildNode, ///
            properties = xmlTagMarkdownNode.properties(context);

      return properties;
    })

    return properties;
  }

  attributeNames(context) {
    const attributeNames = this.fromFirstChildNode((firstChildNode) => {
      const xmlTagMarkdownNode = firstChildNode, ///
            attributeNames = xmlTagMarkdownNode.attributeNames(context);

      return attributeNames;
    })

    return attributeNames;
  }

  attributeValues(context) {
    const attributeValues = this.fromFirstChildNode((firstChildNode) => {
      const xmlTagMarkdownNode = firstChildNode, ///
            attributeValues = xmlTagMarkdownNode.attributeValues(context);

      return attributeValues;
    })

    return attributeValues;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence); }
}
