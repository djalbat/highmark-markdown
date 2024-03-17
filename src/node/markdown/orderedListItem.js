"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

const { first } = arrayUtilities;

export default class OrderedListItemMarkdownNode extends MarkdownNode {
  start() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          markerTerminalNode = firstChildNode,  ///
          markerTerminalNodeContent = markerTerminalNode.getContent(),
          start = markerTerminalNodeContent;  ///

    return start;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(OrderedListItemMarkdownNode, ruleName, childNodes, opacity); }
}
