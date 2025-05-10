"use strict";

import CSSNode from "../../node/css";

export default class ArgumentCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(ArgumentCSSNode, ruleName, childNodes, opacity); }
}
