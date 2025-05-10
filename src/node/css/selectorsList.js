"use strict";

import CSSNode from "../../node/css";

export default class SelectorsListCSSNode extends CSSNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return CSSNode.fromRuleNameChildNodesAndOpacity(SelectorsListCSSNode, ruleName, childNodes, opacity); }
}
