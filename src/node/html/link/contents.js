"use strict";

import HTMLNode from "../../../node/html";

import { CONTENTS_PREPEND } from "../../../prepends";
import { HREF_ATTRIBUTE_NAME } from "../../../attributeNames";
import { CONTENTS_LINK_RULE_NAME } from "../../../ruleNames";

export default class ContentsLinkHTMLNode extends HTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, identifier) {
    super(outerNode, parentNode, childNodes, domElement);

    this.identifier = identifier;
  }

  getIdentifier() {
    return this.identifier;
  }

  getRuleName() {
    const ruleName = CONTENTS_LINK_RULE_NAME;

    return ruleName;
  }

  attributeName(context) {
    const attributeName = HREF_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const prepend = CONTENTS_PREPEND,
          attributeValue = `#${prepend}-${this.identifier}`;

    return attributeValue;
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

    return string;
  }

  static tagName = "a";

  static className = "contents-link";

  static fromNothing() { return HTMLNode.fromNothing(ContentsLinkHTMLNode); }

  static fromOuterNode(outerNode) { return HTMLNode.fromOuterNode(ContentsLinkHTMLNode, outerNode); }

  static fromLineHTMLTransformAndIdentifier(lineHTMLTransform, identifier) {
    const lineHTMLNode = lineHTMLTransform.getLineHTMLNode(),
          childNodes = [
            lineHTMLNode
          ],
          contentsLinkHTMLNode = HTMLNode.fromChildNodes(ContentsLinkHTMLNode, childNodes, identifier);

    return contentsLinkHTMLNode;
  }
}
