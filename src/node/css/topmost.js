"use strict";

import CSSNode from "../../node/css";

import { CSS_MARKDOWN_STYLE_RULE_NAME } from "../../ruleNames/markdownStyle";

export default class TopmostCSSNode extends CSSNode {
  getRuleName() {
    const ruleNme = CSS_MARKDOWN_STYLE_RULE_NAME;

    return ruleNme;
  }

  resolve(context) {
    ///
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

    return string;
  }

  static fromNothing() { return CSSNode.fromNothing(TopmostCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(TopmostCSSNode, outerNode); }
}
