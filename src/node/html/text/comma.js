"use strict";

import TextHTMLNode from "../../../node/html/text";

import { COMMA } from "../../../constants";
import { INDEX_TEXT_MARKDOWN_RULE_NAME } from "../../../ruleNames/markdown";

export default class CommaTextHTMLNode extends TextHTMLNode {
  getRuleName() {
    const ruleName = INDEX_TEXT_MARKDOWN_RULE_NAME;

    return ruleName;
  }

  text(context) {
    const text = COMMA;

    return text;
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  //.

    return string;
  }

  static tagName = null;

  static className = null;

  static fromNothing() { return TextHTMLNode.fromNothing(CommaTextHTMLNode); }
}
