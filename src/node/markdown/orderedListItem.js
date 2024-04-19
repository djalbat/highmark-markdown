"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { VALUE_ATTRIBUTE_NAME } from "../../attributeNames";

const { first } = arrayUtilities;

export default class OrderedListItemMarkdownNode extends MarkdownNode {
  value(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          markerMarkdownNode = firstChildNode,  ///
          value = markerMarkdownNode.value(context);

    return value;
  }

  attributeName(context) {
    const attributeName = VALUE_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const value = this.value(context),
          attributeValue = value; ///

    return attributeValue;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(OrderedListItemMarkdownNode, ruleName, childNodes, opacity); }
}
