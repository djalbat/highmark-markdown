"use strict";

import CSSNode from "../../node/css";

export default class StyleCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(StyleCSSNode, ruleName, childNodes, opacity); }
}
