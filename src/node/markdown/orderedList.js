"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { START_ATTRIBUTE_NAME } from "../../attributeNames";

const { first } = arrayUtilities;

export default class OrderedListMarkdownNode extends MarkdownNode {
  attributeName(context) {
    const attributeName = START_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          firstOrderedListItemMarkdownNode = firstChildNode,  ///
          number = firstOrderedListItemMarkdownNode.number(context),
          attributeValue = number; ///

    return attributeValue;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(OrderedListMarkdownNode, ruleName, childNodes, opacity); }
}
