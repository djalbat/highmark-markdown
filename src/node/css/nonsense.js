"use strict";

import CSSNode from "../../node/css";

export default class NonsenseCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(NonsenseCSSNode, ruleName, childNodes, opacity); }
}
