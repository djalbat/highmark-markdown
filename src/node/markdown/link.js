"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";
import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { second } = arrayUtilities;

export default class LinkMarkdownNode extends MarkdownNode {
  getHRef(context) {
    const identifier = this.getIdentifier(context),
          href = `#${identifier}`;

    return href;
  }

  getIdentifier(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          textMarkdownNode = secondChildNode,  ///
          textMarkdownNodeContent = textMarkdownNode.getContent(context),
          identifier = textMarkdownNodeContent; ///

    return identifier;
  }

  getAttributeName() {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  getAttributeValue(context) {
    const href = this.getHRef(context),
          attributeValue = href; ///

    return attributeValue;
  }

  clear() {
    const innerHTML = EMPTY_STRING;

    this.setInnerHTML(innerHTML);
  }

  setNumber(number) {
    const innerHTML = `${number}`;

    this.setInnerHTML(innerHTML);
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(LinkMarkdownNode, ruleName, childNodes, ambiguous); }
}
