"use strict";

import CSSNode from "../../node/css";

export default class DeclarationCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(DeclarationCSSNode, ruleName, childNodes, opacity); }
}
