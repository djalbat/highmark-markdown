"use strict";

import CSSNode from "../../node/css";

export default class ErrorCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(ErrorCSSNode, ruleName, childNodes, opacity); }
}
