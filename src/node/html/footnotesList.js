"use strict";

import HTMLNode from "../../node/html";

import { START_ATTRIBUTE_NAME } from "../../attributeNames";

export default class FootnotesListHTMLNode extends HTMLNode {
  attributeName(context) {
    const attributeName = START_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = this.start;  ///

    return attributeValue;
  }

  static fromNothing() { return HTMLNode.fromNothing(FootnotesListHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(FootnotesListHTMLNode, outerNode); }
}
