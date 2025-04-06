"use strict";

import HTMLNode from "../../html";

import { VALUE_ATTRIBUTE_NAME } from "../../../attributeNames";

export default class OrderedItemHTMLNode extends HTMLNode {
  value(context) { return this.outerNode.value(context); }

  attributeName(context) {
    const attributeName = VALUE_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const value = this.value(context),
          attributeValue = value; ///

    return attributeValue;
  }

  static fromNothing() { return HTMLNode.fromNothing(OrderedItemHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(OrderedItemHTMLNode, outerNode); }
}
