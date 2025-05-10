"use strict";

import CSSNode from "../../node/css";

export default class SelectorsCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(SelectorsCSSNode, ruleName, childNodes, opacity); }
}
