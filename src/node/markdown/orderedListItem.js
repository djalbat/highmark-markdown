"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class OrderedListItemMarkdownNode extends MarkdownNode {
  number(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          markerMarkdownNode = firstChildNode,  ///
          markerMarkdownNodeNumber = markerMarkdownNode.number(context),
          number = markerMarkdownNodeNumber;  ///

    return number;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(OrderedListItemMarkdownNode, ruleName, childNodes, opacity); }
}
