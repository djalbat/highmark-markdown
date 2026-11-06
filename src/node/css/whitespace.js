"use strict";

import CSSNode from "../../node/css";

import { EMPTY_STRING, SINGLE_SPACE, WHITESPACE } from "../../constants";

export default class WhitespaceCSSNode extends CSSNode {
  asCSS(context) {
    const css = SINGLE_SPACE; ///

    return css;
  }

  asString() {
    const string = WHITESPACE;  ///

    return string;
  }

  getRuleName() {
    const ruleName = EMPTY_STRING;  ///

    return ruleName;
  }

  static fromNothing() { return CSSNode.fromNothing(WhitespaceCSSNode); }
}
