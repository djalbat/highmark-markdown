"use strict";

import CSSTransform from "../../transform/css"

export default class RuleSetCSSTransform extends CSSTransform {
  getRuleSetCSSNode() {
    const cssNode = this.getCSSNode(),
          ruleSetCSSNode = cssNode; ///

    return ruleSetCSSNode;
  }

  appendToTopmostCSSNode(topmostCSSNode) {
    const cssNode = topmostCSSNode; ///

    this.appendTo(cssNode);
  }

  static fromRuleSetCSSNode(ruleSetCSSNode) {
    const cssNode = ruleSetCSSNode, ///
          ruleSetCSSTransform = CSSTransform.fromCSSNode(RuleSetCSSTransform, cssNode);

    return ruleSetCSSTransform;
  }
}
