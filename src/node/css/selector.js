"use strict";

import CSSNode from "../../node/css";

export default class SelectorCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(SelectorCSSNode, ruleName, childNodes, opacity); }
}
