"use strict";

import { arrayUtilities } from "necessary";

import ListItemNode from "../../../node/markdown/listItem";

import { VALUE_ATTRIBUTE_NAME } from "../../../attributeNames";

const { first, second } = arrayUtilities;

export default class OrderedListItemMarkdownNode extends ListItemNode {
  value(context) {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          markerTerminalNode = firstChildNode,  ///
          value = valueFromMarkerTerminalNode(markerTerminalNode);

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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return ListItemNode.fromRuleNameChildNodesAndOpacity(OrderedListItemMarkdownNode, ruleName, childNodes, opacity); }
}

function valueFromMarkerTerminalNode(markerTerminalNode) {
  const content = markerTerminalNode.getContent(),
        matches = content.match(/(\d+)\./),
        secondMatch = second(matches),
        value = secondMatch;  ///

  return value;
}
