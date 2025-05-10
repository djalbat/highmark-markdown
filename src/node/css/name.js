"use strict";

import CSSNode from "../../node/css";

export default class NameCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(NameCSSNode, ruleName, childNodes, opacity); }
}
