"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../../node/markdown";

const { second } = arrayUtilities;

export default class OrderedItemMarkdownNode extends MarkdownNode {
  value(context) {
    const value = this.fromFirstChildNode((firstChildNode) => {
      const markerTerminalNode = firstChildNode,  ///
            value = valueFromMarkerTerminalNode(markerTerminalNode);

      return value;
    });

    return value;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(OrderedItemMarkdownNode, ruleName, childNodes, precedence, opacity); }
}

function valueFromMarkerTerminalNode(markerTerminalNode) {
  const content = markerTerminalNode.getContent(),
        matches = content.match(/(\d+)\./),
        secondMatch = second(matches),
        value = secondMatch;  ///

  return value;
}
