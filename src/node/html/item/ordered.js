"use strict";

import HTMLNode from "../../../node/html";

import { VALUE_ATTRIBUTE_NAME } from "../../../attributeNames";

export default class OrderedItemHTMLNode extends HTMLNode {
  value(context) {
    const markdownNode = this.getMarkdownNode(),
          value = markdownNode.value(context);

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

  static tagName = "li";

  static className = null;

  static fromNothing() { return HTMLNode.fromNothing(OrderedItemHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(OrderedItemHTMLNode, outerNode); }
}
