"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { SRC_ATTRIBUTE_NAME } from "../../attributeNames";

const { second, secondLast } = arrayUtilities;

export default class ImageMarkdownNode extends MarkdownNode {
  createDOMElement(context) {
    const domElement = super.createDOMElement(context),
          innerHTML = this.getInnerHTML(context),
          src = this.getSrc(context),
          name = SRC_ATTRIBUTE_NAME,
          value = src; ///

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
