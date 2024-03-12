"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { START_ATTRIBUTE_NAME } from "../../attributeNames";

const { first } = arrayUtilities;

export default class OrderedListMarkdownNode extends MarkdownNode {
  createDOMElement(context) {
    const domElement = super.createDOMElement(context),
          start = this.getStart(),
          name = START_ATTRIBUTE_NAME,  ///
          value = start; ///

    this.setAttribute(name, value);

    return domElement;
  }

  getStart() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          firstOrderedListItemMarkdownNode = firstChildNode,  ///
          start = firstOrderedListItemMarkdownNode.getStart();

    return start;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(OrderedListMarkdownNode, ruleName, childNodes, ambiguous); }
}
