"use strict";

import CSSNode from "../../node/css";

export default class PseudoClassCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(PseudoClassCSSNode, ruleName, childNodes, opacity); }
}
