"use strict";

import HTMLNode from "../../node/html";

import { CONTENTS_PREPEND } from "../../prepends";
import { HREF_ATTRIBUTE_NAME } from "../../attributeNames";

export default class ContentsLinkHTMLNode extends HTMLNode {
  getIdentifier() { return this.outerNode.getIdentifier(); }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const prepend = CONTENTS_PREPEND,
          identifier = this.getIdentifier(),
          attributeValue = `#${prepend}-${identifier}`;

    return attributeValue;
  }

  static fromNothing() { return HTMLNode.fromNothing(ContentsLinkHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ContentsLinkHTMLNode, outerNode); }
}
