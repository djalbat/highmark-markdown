"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { VALUE_ATTRIBUTE_NAME } from "../../attributeNames";

const { first, second } = arrayUtilities;

export default class OrderedListItemMarkdownNode extends MarkdownNode {
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

  childNodesAsHTML(indent, context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          markedTextChildNode = secondChildNode, ///
          markedTextChildNodeChildNodesHTML = markedTextChildNode.childNodesAsHTML(indent, context),
          childNodesHTML = markedTextChildNodeChildNodesHTML; ///

    return childNodesHTML;
  }

  createChildNodeDOMElements(context) {
    const domElement = this.getDOMElement(),
          childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          markedTextChildNode = secondChildNode; ///

    markedTextChildNode.createChildNodeDOMElements(domElement, context);
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(OrderedListItemMarkdownNode, ruleName, childNodes, opacity); }
}

function valueFromMarkerTerminalNode(markerTerminalNode) {
  const content = markerTerminalNode.getContent(),
        matches = content.match(/(\d+)\./),
        secondMatch = second(matches),
        value = secondMatch;  ///

  return value;
}
