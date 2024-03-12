"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { second, secondLast } = arrayUtilities;

export default class HyperlinkMarkdownNode extends MarkdownNode {
  createDOMElement(context) {
    const domElement = super.createDOMElement(context),
          innerHTML = this.getInnerHTML(context),
          href = this.getHref(context),
          name = HREF_ATTRIBUTE_NAME,
          value = href; ///

    this.setAttribute(name, value);

    this.setInnerHTML(innerHTML);

    return domElement;
  }

  getInnerHTML(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          inlineTextMarkdownNode = secondChildNode,  ///
          inlineTextMarkdownNodeContent = inlineTextMarkdownNode.getContent(context),
          innerHTML = inlineTextMarkdownNodeContent; ///

    return innerHTML;
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
