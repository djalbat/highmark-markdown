"use strict";

import CSSTransform from "../../transform/css"

export default class RuleSetCSSTransform extends CSSTransform {
  static fromRuleSetCSSNode(ruleSetCSSNode) {
    const cssNode = ruleSetCSSNode, ///
          ruleSetCSSTransform = CSSTransform.fromCSSNode(RuleSetCSSTransform, cssNode);

    return ruleSetCSSTransform;
  }
}
