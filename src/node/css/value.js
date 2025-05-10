"use strict";

import CSSNode from "../../node/css";

export default class ValueCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(ValueCSSNode, ruleName, childNodes, opacity); }
}
