"use strict";

import { arrayUtilities } from "necessary";

import ItemNode from "../../../node/markdown/item";

const { second } = arrayUtilities;

export default class OrderedItemMarkdownNode extends ItemNode {
  value(context) {
    const value = this.fromFirstChildNode((firstChildNode) => {
      const markerTerminalNode = firstChildNode,  ///
            value = valueFromMarkerTerminalNode(markerTerminalNode);

      return value;
    });

    return value;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return ItemNode.fromRuleNameChildNodesAndOpacity(OrderedItemMarkdownNode, ruleName, childNodes, opacity); }
}

function valueFromMarkerTerminalNode(markerTerminalNode) {
  const content = markerTerminalNode.getContent(),
        matches = content.match(/(\d+)\./),
        secondMatch = second(matches),
        value = secondMatch;  ///

  return value;
}
