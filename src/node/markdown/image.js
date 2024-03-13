"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { SRC_ATTRIBUTE_NAME } from "../../attributeNames";

const { second, secondLast } = arrayUtilities;

export default class ImageMarkdownNode extends MarkdownNode {
  getInnerHTML(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          inlineTextMarkdownNode = secondChildNode,  ///
          inlineTextMarkdownNodeContent = inlineTextMarkdownNode.getContent(context),
          innerHTML = inlineTextMarkdownNodeContent; ///

    return innerHTML;
  }

  getAttributeName() {
    const attributeName = SRC_ATTRIBUTE_NAME;

    return attributeName;
  }

  getAttributeValue(context) {
    const src = this.getSrc(context),
          attributeValue = src; ///

    return attributeValue;
  }

  getSrc(context) {
    const childNodes = this.getChildNodes(),
          secondLastChildNode = secondLast(childNodes),
          URLMarkdownNode = secondLastChildNode,  ///
          URLMarkdownNodeContent = URLMarkdownNode.getContent(context),
          src = URLMarkdownNodeContent; ///

    return src;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(ImageMarkdownNode, ruleName, childNodes, ambiguous); }
}
