"use strict";

import CSSNode from "../../node/css";

export default class ClassCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(ClassCSSNode, ruleName, childNodes, opacity); }
}
