"use strict";

import CSSTransform from "../../transform/css"

export default class RuleSetCSSTransform extends CSSTransform {
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
