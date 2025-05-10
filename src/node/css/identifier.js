"use strict";

import CSSNode from "../../node/css";

export default class IdentifierCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(IdentifierCSSNode, ruleName, childNodes, opacity); }
}
