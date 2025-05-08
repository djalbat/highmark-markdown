"use strict";

import HTMLTransform from "../../../transform/html";

import { INDEX_HEADING_RULE_NAME } from "../../../ruleNames";

export default class IndexHeadingHTMLTransform extends HTMLTransform {
  static fromLetter(letter) {
    const startRuleName = INDEX_HEADING_RULE_NAME,
          content = `${letter}`,
          indexHeadingHTMLTransform = HTMLTransform.fromHTMLNode(IndexHeadingHTMLTransform, htmlNode);

    return indexHeadingHTMLTransform;
  }
}
