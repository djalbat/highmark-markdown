"use strict";

import HTMLNode from "../../../node/html";

import { START_ATTRIBUTE_NAME } from "../../../attributeNames";
import { FOOTNOTES_LIST_RULE_NAME } from "../../../ruleNames";

export default class FootnotesListHTMLNode extends HTMLNode {
  constructor(outerNode, parentNode, childNodes, domElement, start) {
    super(outerNode, parentNode, childNodes, domElement);

    this.start = start;
  }

  getStart() {
    return this.start;
  }

  attributeName(context) {
    const attributeName = START_ATTRIBUTE_NAME;

    return attributeName;
  }

  attributeValue(context) {
    const attributeValue = this.start;  ///

    return attributeValue;
  }

  asString() {
    const string = FOOTNOTES_LIST_RULE_NAME;  ///

    return string;
  }

  static tagName = "ol";

  static className = "footnotes";

  static fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms) {
    const footnoteItemHTMLNodes = footnoteItemHTMLTransforms.map((footnoteItemHTMLTransform) => {
            const footnoteItemHTMLNode = footnoteItemHTMLTransform.getFootnoteItemHTMLNode();

            return footnoteItemHTMLNode;
          }),
          childNodes = footnoteItemHTMLNodes, ///
          footnotesListHTMLNode = HTMLNode.fromChildNodes(FootnotesListHTMLNode, childNodes, start);

    return footnotesListHTMLNode;
  }
}
