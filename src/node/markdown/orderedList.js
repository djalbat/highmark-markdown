"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { START_ATTRIBUTE_NAME } from "../../attributeNames";

const { first } = arrayUtilities;

export default class OrderedListMarkdownNode extends MarkdownNode {
  attributeName() {
    const attributeName = START_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          firstOrderedListItemMarkdownNode = firstChildNode,  ///
          start = firstOrderedListItemMarkdownNode.start(),
          attributeValue = start; ///

    return attributeValue;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(OrderedListMarkdownNode, ruleName, childNodes, ambiguous); }
}
