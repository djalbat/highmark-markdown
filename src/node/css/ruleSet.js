"use strict";

import CSSNode from "../../node/css";

export default class RuleSetCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(RuleSetCSSNode, ruleName, childNodes, opacity); }
}
