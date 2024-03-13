"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { second, secondLast } = arrayUtilities;

export default class HyperlinkMarkdownNode extends MarkdownNode {
  getInnerHTML(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          inlineTextMarkdownNode = secondChildNode,  ///
          inlineTextMarkdownNodeContent = inlineTextMarkdownNode.getContent(context),
          innerHTML = inlineTextMarkdownNodeContent; ///

    return innerHTML;
  }

  getAttributeName() {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  getAttributeValue(context) {
    const href = this.getHref(context),
          attributeValue = href; ///

    return attributeValue;
  }

  getHref(context) {
    const childNodes = this.getChildNodes(),
          secondLastChildNode = secondLast(childNodes),
          URLMarkdownNode = secondLastChildNode,  ///
          URLMarkdownNodeContent = URLMarkdownNode.getContent(context),
          href = URLMarkdownNodeContent; ///

    return href;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return MarkdownNode.fromRuleNameChildNodesAndAmbiguous(HyperlinkMarkdownNode, ruleName, childNodes, ambiguous); }
}
