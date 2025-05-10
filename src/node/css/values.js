"use strict";

import CSSNode from "../../node/css";

export default class ValuesCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(ValuesCSSNode, ruleName, childNodes, opacity); }
}
