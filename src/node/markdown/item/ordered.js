"use strict";

import { arrayUtilities } from "necessary";

import ItemNode from "../../../node/markdown/item";

import { VALUE_ATTRIBUTE_NAME } from "../../../attributeNames";

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

  attributeName(context) {
    const attributeName = VALUE_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const value = this.value(context),
          attributeValue = value; ///

    return attributeValue;
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
