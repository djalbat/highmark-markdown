"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { EMPTY_STRING } from "../../constants";
import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

const { second } = arrayUtilities;

export default class LinkMarkdownNode extends MarkdownNode {
  createDOMElement(context) {
    const domElement = super.createDOMElement(context),
          href = this.getHRef(context),
          name = HREF_ATTRIBUTE_NAME,
          value = href; ///

    this.setAttribute(name, value);

    return domElement;
  }

  getIdentifier(context) {
    const childNodes = this.getChildNodes(),
          secondChildNode = second(childNodes),
          textMarkdownNode = secondChildNode,  ///
          textMarkdownNodeContent = textMarkdownNode.getContent(context),
          identifier = textMarkdownNodeContent; ///

    return identifier;
  }

  getHRef(context) {
    const identifier = this.getIdentifier(context),
          href = `#${identifier}`;

    return href;
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
